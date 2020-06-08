import {combineReducers } from "redux";
import errorReducer from "./errorReducers";
import userReducer from "./userReducers";
import DashboardReducer from "./DashboardReducer";


export default combineReducers({
    errors:errorReducer,
    userFromCombineReducer:userReducer,
    dashboardReducer:DashboardReducer
});