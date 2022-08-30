import {catalogReducer} from './catalogReducer'
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    catalog: catalogReducer
})