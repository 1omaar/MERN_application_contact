import { combineReducers } from "redux";
import { contactReducer } from "./contacts";
import { addAndEditReducer } from "./addOrEdit";
export const rootReducer = combineReducers({ contactReducer,addAndEditReducer });
