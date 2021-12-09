import { DELETE_USER, GET_USER, UPDATE_USER } from "../actions/user_actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload
        case UPDATE_USER:
            return {
            ...state
        }
        case DELETE_USER:
            return {
               ...state 
            }
        default:
            return state;
    }
}