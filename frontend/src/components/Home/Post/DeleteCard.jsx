import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getPosts } from '../../../actions/post_actions';

const DeleteCard = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer)
    // console.log(props.id);
    const deleteP = async () => {
        await dispatch(deletePost(props.id, userData.admin))
        dispatch(getPosts())
    }

    return (
        <>
            <i className="fas fa-trash delete_card" onClick={() => {
                if (window.confirm('Voulez vous supprimer ce post ?')){ 
                    deleteP(); 
                }
            }}></i>
        </>
    );
};

export default DeleteCard;