import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import usersReducer from "./users_reducer";
import postReducer from "./post_reducer";
import commentReducer from "./comment_reducer";
import allPostsReducer from "./AllPosts_reducer";

export default combineReducers({
    userReducer,
    usersReducer,
    allPostsReducer,
    postReducer,
    commentReducer,
});