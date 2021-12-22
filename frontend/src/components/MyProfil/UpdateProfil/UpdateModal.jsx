import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../../actions/user_actions';
import { UidContext } from '../../AppContext';
import './UpdateModal.css';

const UpdateModal = ({showModal, hideModal}) => {

    const uid = useContext(UidContext)
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const [name, setName] = useState(userData.name);
    const [firstname, setFirstname] = useState(userData.firstname);
    const [email, setEmail] = useState(userData.email);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name: name,
            firstname: firstname,
            email: email
        }
        dispatch(updateUser(data, uid))
            .then(() => {
                dispatch(getUser(uid))
                hideModal()
            })
            .catch((err) => console.log(err))
    }
            
            


    return (
        showModal && (
        <form className='modal_container' onSubmit={handleSubmit}>
            <label htmlFor='name'>Nom</label>
            <input type='text' value={name} id='name' onChange={e => setName(e.target.value)} minLength="2"/>
            <label htmlFor='firstname'>Prénom</label>
            <input type='text' value={firstname} id='firstname' onChange={e => setFirstname(e.target.value)} minLength="2"/>
            <label htmlFor='email'>Email</label>
            <input type='email' value={email} id='email' onChange={e => setEmail(e.target.value)}/>
            <button type='submit'>Soumettre les modifications</button>
            <button onClick={hideModal} type='button'>Retour</button>
        </form>
        )
    );
};

export default UpdateModal;