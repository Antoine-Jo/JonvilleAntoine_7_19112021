import axios from 'axios';

// Posts
export const GET_POSTS = "GET_POSTS";
export const UPDATE_POST = "UPDATE_POST"

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

export const updatePost = (text, idposts, userid) => {
    return (dispatch) => {
        return axios ({
            method: 'PUT',
            mode: 'cors',
            url: `http://localhost:5000/api/post/${idposts}`,
            data: {
                text,
                userid
            },
            withCredentials: 'true'
        })
        .then((res) => {
            dispatch({ type: UPDATE_POST, payload: {text, idposts, userid}})
        })
        .catch((err) => console.log(err.response.data.err))
    }
}