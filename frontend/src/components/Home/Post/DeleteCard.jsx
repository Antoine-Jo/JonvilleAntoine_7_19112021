import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../../actions/post_actions';

const DeleteCard = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer)
    // console.log(props.id);
    const deleteP = () => {
        
        console.log(userData.admin, props.id);
        dispatch(deletePost(props.id, userData.admin))
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