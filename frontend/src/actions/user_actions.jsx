import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

export const getUser = (id) => {
    return (dispatch) => {
        return axios ({
            method: 'GET',
            url : `http://localhost:5000/api/user/${id}`,
            withCredentials: true
        })
            .then((res) => {
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

export const updateUser = (data, uid) => {
    return (dispatch) => {
        return axios ({
            method: 'PUT',
            mode: 'cors',
            url: `http://localhost:5000/api/user/${uid}`,
            data: data,
            withCredentials: 'true',
        })
        .then((res) => {
            dispatch({ type: UPDATE_USER, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}

export const deleteUser = (uid) => {
    return (dispatch) => {
        return axios ({
            method: 'DELETE',
            mode: 'cors',
            url: `http://localhost:5000/api/user/${uid}`,
            withCredentials: 'true'
        })
        .then((res) => {
            dispatch({ type: DELETE_USER, payload: res.data})
        })
        .catch((err) => console.log(err))
    }
}