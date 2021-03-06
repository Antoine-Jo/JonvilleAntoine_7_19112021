import React, { useState } from 'react';
import UpdateModal from '../UpdateProfil/UpdateModal';
import './BtnProfil.css';

const BtnUpdateProfil = () => {

    const [openModal, setOpenModal] = useState(false)

    const showModal = () => {
        setOpenModal(true)
    }

    const hideModal = () => {
        setOpenModal(false)
    }


    return (
        <>
        <button className='update_btn' onClick={showModal}>Modifier le profil</button>
        <UpdateModal showModal={openModal} hideModal={hideModal}/>
        </>
    );
};

export default BtnUpdateProfil;