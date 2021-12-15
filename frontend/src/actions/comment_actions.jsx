import axios from "axios";

// Commentaires
export const GET_ALL_COMMENTS = "GET_ALL_COMMENTS";
export const GET_COMMENTS = "GET_COMMENTS";


export const getAllComments = () => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
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
            url: `http://localhost:5000/api/post/comments/AllComments/${idposts}`,
            withCredentials: true
        })
        .then((res) => {
            dispatch({ type: GET_COMMENTS, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}