import { GET_POSTS, UPDATE_POST } from "../actions/post_actions";

const initialState = [];

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case UPDATE_POST:
            return state.map((post) => {
                if (post.idposts === action.payload.idposts) {
                return {
                    ...state,
                    message: action.payload.message,
                }
                } else return post;
            })
        default: 
            return state
    }
}