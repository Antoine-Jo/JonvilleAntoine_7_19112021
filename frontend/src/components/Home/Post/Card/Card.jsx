import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, updatePost } from '../../../../actions/post_actions';
import { UidContext } from '../../../AppContext';
import { dateParser } from '../../../../services/DateForm';
import DeleteCard from './DeleteCard';
import CommentCard from './Comment/CommentCard';
import { addComment, getComments } from '../../../../actions/comment_actions';
import axios from 'axios';
import LikeInteract from './Likes/LikeInteract';
import './Card.css';
import avatar from "../../../../images/AvatarP7.png"

const Card = ({ post }) => {
    const userData = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();
    const uid = useContext(UidContext);
    const [modalComment, setModalComment] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [editMessage, setEditMessage] = useState(null);
    const [addCom, setAddCom] = useState('')
    const [nbrComment, setNbrComment] = useState(0)

    const updateText = () => {
        if (editMessage) {
            dispatch(updatePost(editMessage, post.idposts, userData.admin))
            .then(() => {
                dispatch(getPosts());
            })
        }
        setUpdateModal(false);
    }

    const createComment = () => {
        if (addCom) {
            dispatch(addComment(uid, addCom, post.idposts))
            .then(() => {
                dispatch(getComments(post.idposts))
                setAddCom('')
            })
        }
    }
    
    //TODO Améliorer le useEffect avec le Reducer
    useEffect(() => {
        const countNumber = async () => {
            await axios ({
                method: 'GET',
                mode: 'cors',
                url: `http://localhost:5000/api/post/comments/comments/${post.idposts}`,
                withCredentials: true,
            })
            .then((res) => {
                const nbrComment = res.data.total
                setNbrComment(nbrComment)
                // console.log(nbrComment);
            }, [nbrComment])
        }
        countNumber()
    }, [nbrComment, post])
    
    return (
        <article className='post_container' key={post.idposts}>
            <img src={post.picture ? post.picture : avatar} alt='avatar author' className='logo_user'/>
            <div className='post_header'>
                <h3>{post.name} {post.firstname}</h3>
                <p>{dateParser(post.createdate)}</p>
                {(post.id === uid || userData.admin === 1 ) && (
                    <>
                        <i className="fas fa-edit edit_card" onClick={() => setUpdateModal(!updateModal)}></i>
                        <DeleteCard id={post.idposts} />
                    </>
                )}
            </div>
            {updateModal === false && <p className='post_text'>{post.text}</p>}
            {updateModal && (
                <div className='edit_container'>
                <label htmlFor="post">
                <textarea defaultValue={post.text} onChange={e => setEditMessage(e.target.value)} className='edit_text' id='post'/>
                <button onClick={updateText} className='edit_btn'>Envoyer les modifications</button>
                </label>
                </div>
            )}
            <footer className='post_footer'>
                <i className="fas fa-comments icon_comment" onClick={() => setModalComment(!modalComment)}>
                <span className='nbr_comment' onChange={e => setNbrComment(nbrComment)}>{nbrComment}</span>
                </i>
                <LikeInteract post={post} />
                {modalComment &&
                    <div className='comments_bloc'>
                        <CommentCard post={post} key={post.idposts} />
                        <label htmlFor="comment">
                        <textarea id='comment' placeholder='Ajouter un commentaire' value={addCom} onChange={e => setAddCom(e.target.value)} className='create_comment' />
                        <button className='btn_comment' onClick={createComment}>Envoyer</button>
                        </label>
                    </div> 
                } 
            </footer>
        </article>
    );
};

export default Card;