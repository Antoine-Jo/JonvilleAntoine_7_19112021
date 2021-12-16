import axios from "axios";

// Commentaires
export const GET_ALL_COMMENTS = "GET_ALL_COMMENTS";
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";


export const getAllComments = () => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
            mode: 'cors',
            url: `http://localhost:5000/api/post/comments/allComments/`,
            withCredentials: true
        })
        .then((res) => {
            dispatch({ type: GET_ALL_COMMENTS, payload: res.data })
        })
        .catch((err) => console.log(err))
    }
}

export const getComments = (idposts) => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
            mode: 'cors',
            url: `http://localhost:5000/api/post/comments/AllComments/${idposts}`,
            withCredentials: true
        })
        .then((res) => {
            dispatch({ type: GET_COMMENTS, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}

export const addComment = (userId, text, idposts) => {
    return (dispatch) => {
        return axios ({
            method: 'POST',
            mode: 'cors',
            url: `http://localhost:5000/api/post/comments/comment/${idposts}`,
            withCredentials: true,
            data: {
                userId,
                text
            }
        })
        .then((res) => {
            dispatch({ type: ADD_COMMENT, payload: {} })
        })
        .catch((err) => console.log(err))
    }
}

export const updateComment = (text, admin, id) => {
    return (dispatch) => {
        return axios ({
            method: 'PUT',
            mode: 'cors',
            url: `http://localhost:5000/api/post/comments/comment/${id}`,
            data: {
                text,
                admin
            },
            withCredentials: true
        })
        .then((res) => {
            console.log(res);
            dispatch({ type: UPDATE_COMMENT, payload: {text: text} })
        })
        .catch((err) => console.log(err))
    }
}