import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, getPosts } from '../../../../actions/post_actions';
import './AddPost.css'

const AddPost = () => {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handlePost = async () => {
        await dispatch(createPost(message))
        dispatch(getPosts());
        setMessage('')
    }
        
        

    return (
        <div className='add_container'>
            <label htmlFor="message">
            <textarea className='add_text' name='message' id='message' placeholder='Poster votre message' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className='send' onClick={handlePost}>Envoyer</button>
            </label>
        </div>
    );
};

export default AddPost;