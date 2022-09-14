import {catalogReducer} from './catalogReducer'
import {userReducer} from './userReducer'
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    catalog: catalogReducer,
    user: userReducer
})