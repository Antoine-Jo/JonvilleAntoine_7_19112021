import React from 'react';
import './EditProfil.css';
import FieldProfil from './FieldProfil';
import { useNavigate } from 'react-router';

const EditProfil = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home')
    }

    return (
        <div className='profil_container'>
            <div className='profil_header'>
                <h2 className='profil_title'>Votre profil</h2>
                <i className="fas fa-times profil_closed" onClick={handleClick}></i>
            </div>
            <FieldProfil/>
        </div>
    );
};

export default EditProfil;