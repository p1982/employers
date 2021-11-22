import { combineReducers } from 'redux'
import { employersReducer } from "./employers/reducer";

export const rootReducer = combineReducers({
    employers: employersReducer,
});