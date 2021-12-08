import React from 'react';
import avatar from '../../images/AvatarP7.png';
import { useSelector } from 'react-redux';

const FieldProfil = () => {
    const userData = useSelector((state) => state.userReducer);

    return (
        <div className='field_profil'>
            <img src={avatar} className="field_avatar" alt="Avatar de l'utilisateur" />
            <h3 className='field_title'>{userData.name}</h3>
            <h3 className='field_title'>{userData.firstname}</h3>
            <p className='field_mail'>{userData.email}</p>
            
        </div>
    );
};

export default FieldProfil;