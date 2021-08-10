import { combineReducers } from "redux";
import reserveInfo from "./reserveInfo";
import userInfo from "./userInfo";

const RootReducer = combineReducers({
    userInfo,
    reserveInfo,
});

export default RootReducer;

