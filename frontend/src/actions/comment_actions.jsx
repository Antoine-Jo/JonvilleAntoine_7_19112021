import axios from "axios";

// Commentaires
export const GET_COMMENTS = "GET_COMMENTS";


export const getComments = () => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
            url: `http://localhost:5000/api/post/comments/allComments/`,
            withCredentials: true
        })
        .then((res) => {
            dispatch({ type: GET_COMMENTS, payload: res.data })
        })
        .catch((err) => console.log(err))
    }
}