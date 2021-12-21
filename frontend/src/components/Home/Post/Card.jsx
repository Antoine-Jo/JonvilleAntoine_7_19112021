import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, updatePost } from '../../../actions/post_actions';
import logo from '../../../images/AvatarP7.png'
import { UidContext } from '../../AppContext';
import { dateParser } from '../../../services/DateForm';
import DeleteCard from './DeleteCard';
import CommentCard from './CommentCard';
import { addComment, getComments } from '../../../actions/comment_actions';
import axios from 'axios';

const Card = ({ post }) => {
    const userData = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();
    const uid = useContext(UidContext);
    const [modalComment, setModalComment] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [editMessage, setEditMessage] = useState(null);
    const [addCom, setAddCom] = useState('')
    const [nbrComment, setNbrComment] = useState(0)
    const [colorLike, setColorLike] = useState(false);

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
    })

    const handleLike = async () => {
        await axios ({
            method: 'PATCH',
            mode: 'cors',
            withCredentials: true,
            data: {
                uid
            },
            url: `http://localhost:5000/api/post/${post.idposts}/like`
        })
        .then(() => {
            setColorLike(!colorLike)
        })
    }

    useEffect(() => {
        const liker = async () => {
            const res = await axios ({
                method: 'GET',
                mode: 'cors',
                withCredentials: true,
                data: {
                    uid
                },
                url: `http://localhost:5000/api/post/${post.idposts}/likes`
            })
        if (res.data[0]) return setColorLike(true)
        return setColorLike(false)
        }
        liker()
    }, [post, uid])

    return (
        <article className='post_container' key={post.idposts}>
            <img src={logo} alt='avatar author' className='logo_user'/>
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
                <textarea defaultValue={post.text} onChange={e => setEditMessage(e.target.value)} className='edit_text'/>
                <button onClick={updateText} className='edit_btn'>Envoyer les modifications</button>
                </div>
            )}
            <footer className='post_footer'>
                <i className="fas fa-comments icon_comment" onClick={() => setModalComment(!modalComment)}>
                <span className='nbr_comment' onChange={e => setNbrComment(nbrComment)}>{nbrComment}</span>
                </i>
                {colorLike ? <i className="far fa-thumbs-up icon_like active-like" onClick={handleLike}></i> : <i className="far fa-thumbs-up icon_like" onClick={handleLike}></i>}
                {modalComment &&
                    <div className='comments_bloc'>
                        <CommentCard post={post} key={post.idposts} />
                        <textarea placeholder='Ajouter un commentaire' value={addCom} onChange={e => setAddCom(e.target.value)} className='create_comment' />
                        <button className='btn_comment' onClick={createComment}>Envoyer</button>
                    </div> 
                } 
            </footer>
        </article>
    );
};

export default Card;