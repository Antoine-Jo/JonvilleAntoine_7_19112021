import React from 'react';
import Field from '../Field';
import './EditProfil.css'

const FieldProfil = () => {
    return (
        <div className='field_profil'>
            <h3 className='field_title'>Mbappé</h3>
            <Field type='text'/>
        </div>
    );
};

export default FieldProfil;