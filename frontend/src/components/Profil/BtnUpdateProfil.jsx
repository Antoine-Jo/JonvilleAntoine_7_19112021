import React, { useState } from 'react';
import UpdateModal from './UpdateModal';

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
        <UpdateModal showModal={openModal}/>
        </>
    );
};

export default BtnUpdateProfil;