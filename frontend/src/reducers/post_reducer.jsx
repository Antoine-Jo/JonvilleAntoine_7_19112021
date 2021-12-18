import { DELETE_POST, GET_POSTS, UPDATE_POST } from "../actions/post_actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case UPDATE_POST:
            return state.map((post) => {
                if (post.idposts === action.payload.idposts) {
                return {
                    ...state,
                    text: action.payload.text,
                }
                } else return post;
            })
        case DELETE_POST:
            return state.filter((post) => post.idposts !== action.payload.idposts);
        default: 
            return state
    }
}