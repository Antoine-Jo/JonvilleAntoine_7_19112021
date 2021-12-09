import React, { useContext } from 'react';
import avatar from '../../images/AvatarP7.png';
import { useSelector } from 'react-redux';
import { UidContext } from '../AppContext';
import BtnUpdateProfil from './BtnUpdateProfil';

const FieldProfil = () => {
    const userData = useSelector((state) => state.userReducer);
    const uid = useContext(UidContext);

    return (
        <div className='field_profil'>
            <img src={avatar} className="field_avatar" alt="Avatar de l'utilisateur" />
            <h3 className='field_title'>{userData.name}</h3>
            <h3 className='field_title'>{userData.firstname}</h3>
            <p className='field_mail'>{userData.email}</p>
            {uid ? (
                <>
                <BtnUpdateProfil/>
                <button className='delete_btn'>Supprimer le compte</button>
                </>
            ): (
                <span></span>
            )}
        </div>
    );
};

export default FieldProfil;