import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../actions/post_actions';
import { UidContext } from '../../AppContext';

const AddPost = () => {

    const [message, setMessage] = useState('');
    const uid = useContext(UidContext);
    const dispatch = useDispatch();

    const handlePost = async () => {
        await axios ({
            method: 'POST',
            mode: 'cors',
            withCredentials: 'true',
            url: 'http://localhost:5000/api/post',
            data: {
                uid,
                text: message,
            }
        })
        .then((res) => {
            dispatch(getPosts());
            setMessage('')
        })
        .catch((err) => {
            console.log(err.response.data.err);
        })
    }

    return (
        <div className='add_container'>
            <textarea name='message' id='message' placeholder='Poster votre message' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className='send' onClick={handlePost}>Envoyer</button>
            <button className='cancel' onClick={() => setMessage('')}>Annuler</button>
        </div>
    );
};

export default AddPost;