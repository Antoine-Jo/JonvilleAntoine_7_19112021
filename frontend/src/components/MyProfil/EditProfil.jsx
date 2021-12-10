import React, { useContext } from 'react';
import './EditProfil.css';
import FieldProfil from './FieldProfil';
import { Link } from 'react-router-dom';
import { UidContext } from '../AppContext';
import { useSelector } from 'react-redux';

const EditProfil = () => {
    const userData = useSelector((state) => state.userReducer)
    const uid = useContext(UidContext)

    return (
        <div className='profil_container'>
            <div className='profil_header'>
                <Link to='/home'><i className="fas fa-arrow-circle-left profil_closed"></i></Link>
                {uid === userData.id ? (
                    <h2 className='profil_title'>Mon profil</h2>
                ) : (
                    <h2 className='profil_title'>Profil de {userData.name}</h2>
                )}
            </div>
            <FieldProfil/>
        </div>
    );
};

export default EditProfil;