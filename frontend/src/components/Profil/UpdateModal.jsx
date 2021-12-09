import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UidContext } from '../AppContext';

const UpdateModal = ({showModal, hideModal}) => {

    const uid = useContext(UidContext)

    const initialState = {
        name: '',
        firstname: '',
        email: '',
    }
    const [newData, setNewData] = useState(initialState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newData);

        await axios({
            method: 'PUT',
            mode: 'cors',
            url: `http://localhost:5000/api/user/${uid}`,
            data: newData,
            withCredentials: 'true',
        })
        .then((res) => {
            console.log(res);
            hideModal();
            window.location ='/profil/:id'
        })
        .catch((err) => {
            console.log(err.response.data.err)
        })
    }

    return (
        showModal && (

        <form className='modal_container'>
            <label htmlFor='name'>Nom</label>
            <input type='text' value={newData.name} id='name' onChange={e => setNewData({...newData, name: e.target.value})} minLength="2"/>
            <label htmlFor='firstname'>Prénom</label>
            <input type='text' value={newData.firstname} id='firstname' onChange={e => setNewData({...newData, firstname: e.target.value})} minLength="2"/>
            <label htmlFor='email'>Email</label>
            <input type='email' value={newData.email} id='email' onChange={e => setNewData({...newData, email: e.target.value})}/>
            <button onClick={handleSubmit} type='submit'>Soumettre les modifications</button>
        </form>
        )
    );
};

export default UpdateModal;