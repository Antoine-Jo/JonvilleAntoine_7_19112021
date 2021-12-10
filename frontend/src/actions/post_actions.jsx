import axios from 'axios';

// Posts
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
            url : `http://localhost:5000/api/post/`,
            withCredentials: true
        })
        .then((res) => {
            dispatch({ type: GET_POSTS, payload: res.data })
        })
        .catch((err) => console.log(err))
    }
}