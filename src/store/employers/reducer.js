import { GET_EMPLOYERS_ERROR, GET_EMPLOYERS_INIT, GET_EMPLOYERS_SUCCESS, ADD_EMPLOYER, REMOVE_EMPLOYER } from './types'

const initialState = {
    employers: [],
    isEmployersLoading: false,
    error: null,
    employersActive: [],
}

export const employersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYERS_INIT:
            return {
                ...state,
                isEmployersLoading: true,
                error: null,
            }
        case GET_EMPLOYERS_SUCCESS:
            return {
                ...state,
                employers: action.payload,
                isEmployersLoading: false,
                employersActive: action.payload.filter(employer => employer.isActive)
            }
        case GET_EMPLOYERS_ERROR:
            return {
                ...state,
                error: action.error
            }
        case ADD_EMPLOYER:
            return {
                ...state,
                employers: state.employers.map(employer => {
                    if (employer.id === action.payload.id) {
                        return { ...employer, isActive: !employer.isActive }
                    }
                    return employer
                }),
                employersActive: [...state.employersActive, action.payload,]
            }
        case REMOVE_EMPLOYER:
            return {
                ...state,
                employers: state.employers.map(employer => {
                    if (employer.id === action.payload.id) {
                        return { ...employer, isActive: !employer.isActive }
                    }
                    return employer
                }),
                employersActive: state.employersActive.filter(employer => employer.id !== action.payload.id)
            }
        default:
            return state
    }
}