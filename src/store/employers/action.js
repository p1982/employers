import {
    GET_EMPLOYERS_ERROR,
    GET_EMPLOYERS_INIT,
    GET_EMPLOYERS_SUCCESS,
    ADD_EMPLOYER,
    REMOVE_EMPLOYER,
} from './types'
import { store } from '../index'

const getEmployersError = (error) => {
    return {
        type: GET_EMPLOYERS_ERROR,
        payload: error,
    }
}

const getEmployersInit = () => {
    return {
        type: GET_EMPLOYERS_INIT
    }
}

const getEmployersSuccess = (employers) => {
    return {
        type: GET_EMPLOYERS_SUCCESS,
        payload: employers,
    }
}

const checkEmployers = (employers, storage) => {
    const updatedEmployers = employers.map((employer) => {
        const activeEmployers = storage.some(({ id }) => (id === employer.id))
        return { ...employer, isActive: activeEmployers, }
    })
    return updatedEmployers
}

export const onChangeAdd = (id) => {
    const state = store.getState()
    const employers = state.employers.employers
    const employer = { ...employers.find((employer) => employer.id === id), isActive: true }
    const storage = JSON.parse(localStorage.getItem("active"))
    storage.push(employer)
    localStorage.setItem("active", JSON.stringify(storage))
    return {
        type: ADD_EMPLOYER,
        payload: employer
    }
}

export const onChangeRemove = (id) => {
    const state = store.getState()
    const employers = state.employers.employers
    const localActive = JSON.parse(localStorage.getItem('active'));
    const newActive = localActive.filter((employers,) => {
        return id !== employers.id;
    })
    localStorage.setItem('active', JSON.stringify(newActive))
    const employer = { ...employers.find((employer) => employer.id === id), isActive: false }
    return {
        type: REMOVE_EMPLOYER,
        payload: employer
    }
}

export const getEmployers = () => async (dispatch) => {
    dispatch(getEmployersInit())
    if (!localStorage.getItem('active')) {
        localStorage.setItem('active', JSON.stringify([]))
    }
    try {
        const response = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
        const employers = await response.json();
        const localActive = JSON.parse(localStorage.getItem('active'))
        const updatedEmployers = checkEmployers(employers, localActive)
        dispatch(getEmployersSuccess(updatedEmployers))
    } catch (error) {
        dispatch(getEmployersError(error))
    }
}