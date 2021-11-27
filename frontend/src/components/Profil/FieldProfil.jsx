import React from 'react';
import avatar from '../../images/AvatarP7.png';

const FieldProfil = () => {
    return (
        <div className='field_profil'>
            <img src={avatar} className="field_avatar" alt="Avatar de l'utilisateur" />
            <h3 className='field_title'>Mbappé</h3>
            <h3 className='field_title'>Kylian</h3>
            <p className='field_mail'>test@test.com</p>
            
        </div>
    );
};

export default FieldProfil;