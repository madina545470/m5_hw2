import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import todoReducer from "./todoReducer";

export const rootReducer = combineReducers({
    mainReducer,
    todoReducer
})