import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/post_actions';

const DeleteCard = (props) => {
    const dispatch = useDispatch();
    // console.log(props.id);
    const deleteP = () => {
        dispatch(deletePost(props.id))
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