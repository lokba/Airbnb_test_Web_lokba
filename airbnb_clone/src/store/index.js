import { combineReducers } from "redux";
import userInfo from "./userInfo";

const RootReducer = combineReducers({
    userInfo,
});

export default RootReducer;

