import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import postReducer from "./post_reducer";

export default combineReducers({
    userReducer,
    postReducer
});