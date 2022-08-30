import {categoryReducer} from './categoryReducer'
import {combineReducers} from "redux";
import {catalogReducer} from "./catalogReducer";

export const rootReducer = combineReducers({
    category: categoryReducer,
    catalog: catalogReducer
})