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
                <i className="fas fa-arrow-circle-left profil_closed" onClick={handleClick}></i>
                <h2 className='profil_title'>Votre profil</h2>
            </div>
            <FieldProfil/>
        </div>
    );
};

export default EditProfil;