import axios from 'axios';

// Posts
export const GET_POSTS = "GET_POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";

export const getPosts = (num) => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
            url : `http://localhost:5000/api/post/`,
            withCredentials: true
        })
        .then((res) => {
            const array = res.data.slice(0, num)
            dispatch({ type: GET_POSTS, payload: array });
            dispatch({ type: GET_ALL_POSTS, payload: res.data })
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
        .then((res) => {
            // dispatch({ type: CREATE_POST, payload: res.data.text })
        })
        .catch((err) => console.log(err))
    }
}

export const updatePost = (text, idposts, admin) => {
    return (dispatch) => {
        return axios ({
            method: 'PUT',
            mode: 'cors',
            url: `http://localhost:5000/api/post/${idposts}`,
            data: {
                text,
                admin,
            },
            withCredentials: 'true'
        })
        .then((res) => {
            dispatch({ type: UPDATE_POST, payload: {text: text} })
        })
        .catch((err) => console.log(err.response.data.err))
    }
}

export const deletePost = (idposts, admin) => {
    return (dispatch) => {
        return axios ({
            method: 'DELETE',
            mode: 'cors',
            url: `http://localhost:5000/api/post/${idposts}`,
            data: {
                admin,
            },
            withCredentials: 'true'
        })
        .then((res) => {
            dispatch({ type: DELETE_POST, payload: {idposts: idposts} })
        })
        .catch((err) => console.log(err))
    }
}

export const likePost = (idposts, uid) => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
            mode: 'cors',
            withCredentials: true,
            data: {
                uid
            },
            url: `http://localhost:5000/api/post/${idposts}/likes`
        })
        .then((res) => {
            dispatch({ type: LIKE_POST, payload: {likes: res.data}})
        })
        .catch((err) => console.log(err))
    }
}