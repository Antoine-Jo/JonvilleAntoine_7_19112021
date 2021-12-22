import React, { useContext } from 'react';
import './EditProfil.css';
import FieldProfil from './FieldProfil/FieldProfil';
import { Link } from 'react-router-dom';
import { UidContext } from '../AppContext';
import Subscription from '../../pages/Subscription';

const EditProfil = () => {
    const uid = useContext(UidContext)

    return (
        <div className='profil_container'>
            <div className='profil_header'>
                <Link to='/home'><i className="fas fa-arrow-circle-left profil_closed"></i></Link>
                {uid ? (
                    <h2 className='profil_title'>Mon profil</h2>
                ) : (
                    <Subscription/>
                )}
            </div>
            <FieldProfil/>
        </div>
    );
};

export default EditProfil;