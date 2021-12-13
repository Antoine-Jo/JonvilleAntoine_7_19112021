import axios from 'axios';

// Posts
export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

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

export const createPost = (text) => {
    return (dispatch) => {
        return axios ({
            method: 'POST',
            mode: 'cors',
            withCredentials: 'true',
            url: 'http://localhost:5000/api/post',
            data: {
                text
            }
        })
    }
}

export const updatePost = (text, idposts) => {
    return (dispatch) => {
        return axios ({
            method: 'PUT',
            mode: 'cors',
            url: `http://localhost:5000/api/post/${idposts}`,
            data: {
                text,
            },
            withCredentials: 'true'
        })
        .then((res) => {
            dispatch({ type: UPDATE_POST, payload: {text: text} })
        })
        .catch((err) => console.log(err.response.data.err))
    }
}

export const deletePost = (idposts) => {
    return (dispatch) => {
        return axios ({
            method: 'DELETE',
            mode: 'cors',
            url: `http://localhost:5000/api/post/${idposts}`,
            withCredentials: 'true'
        })
        .then((res) => {
            dispatch({ type: DELETE_POST, payload: {idposts: idposts} })
        })
        .catch((err) => console.log(err))
    }
}