import { DELETE_COMMENT, GET_ALL_COMMENTS, GET_COMMENTS, UPDATE_COMMENT } from "../actions/comment_actions";


const initialState = {};

export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COMMENTS:
            return action.payload;
        case GET_COMMENTS:
            return action.payload;
        case UPDATE_COMMENT:
            return state.map((comment) => {
                if(comment.id === action.payload.id) {
                    return {
                        ...state,
                        text: action.payload.text,
                    }
                } else return comment;
            })
        case DELETE_COMMENT:
            return state.filter((comment) => comment.id !== action.payload.id);
        default:
            return state
    }
}