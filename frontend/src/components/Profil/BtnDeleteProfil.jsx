import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../actions/user_actions';
import { UidContext } from '../AppContext';

const BtnDeleteProfil = () => {

    const uid = useContext(UidContext);
    const dispatch = useDispatch();
    const deleteText = document.querySelector('.delete_validity')

    const handleDelete = (e) => {
        e.preventDefault();
        
        dispatch(deleteUser(uid))
        window.location = '/'
    };

    return (
        <>
           <button className='btn_delete' onClick={handleDelete}>Supprimer le profil</button>
        </>
    );
};

export default BtnDeleteProfil;