import { DELETE_POST, GET_POSTS, LIKE_POST, UPDATE_POST } from "../actions/post_actions";

const initialState = {post: {}, likes: {}};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                post: action.payload,
                like: {}
            }
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
        case LIKE_POST:
            return state.map((post) => {
                if(post.idposts === action.payload.idposts) {
                    return {
                        ...state,
                        likes: action.payload.likes
                    }
                } else return post
            })
        default: 
            return state
    }
}