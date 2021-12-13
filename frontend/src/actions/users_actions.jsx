import axios from "axios";

export const GET_ALL_USERS = "GET_ALL_USERS";

export const getAllUsers = (uid) => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
            url: 'http://localhost:5000/api/user/',
            withCredentials: true
        })
        .then((res) => {
            dispatch({ type: GET_ALL_USERS, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}