import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, getPosts } from '../../../actions/post_actions';

const AddPost = () => {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handlePost = () => {
        dispatch(createPost(message))
        .then(() => {
            dispatch(getPosts());
            setMessage('')
        })
    }

    return (
        <div className='add_container'>
            <textarea className='add_text' name='message' id='message' placeholder='Poster votre message' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className='send' onClick={handlePost}>Envoyer</button>
        </div>
    );
};

export default AddPost;