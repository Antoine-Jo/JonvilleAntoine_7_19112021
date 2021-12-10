import React from 'react';
import './EditProfil.css';
import FieldProfil from './FieldProfil';
import { Link } from 'react-router-dom';

const EditProfil = () => {

    return (
        <div className='profil_container'>
            <div className='profil_header'>
                <Link to='/home'><i className="fas fa-arrow-circle-left profil_closed"></i></Link>
                <h2 className='profil_title'>Votre profil</h2>
            </div>
            <FieldProfil/>
        </div>
    );
};

export default EditProfil;