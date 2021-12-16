import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, updatePost } from '../../../actions/post_actions';
import logo from '../../../images/AvatarP7.png'
import { UidContext } from '../../AppContext';
import { dateParser } from '../../../services/DateForm';
import DeleteCard from './DeleteCard';
import CommentCard from './CommentCard';

const Card = ({ post }) => {
    const userData = useSelector((state) => state.userReducer)
    const commentsData = useSelector((state) => state.commentReducer)
    const dispatch = useDispatch();
    const uid = useContext(UidContext);
    const [modalComment, setModalComment] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [editMessage, setEditMessage] = useState(null);

    const updateText = () => {
        if (editMessage) {
            dispatch(updatePost(editMessage, post.idposts, userData.admin))
            .then(() => {
                dispatch(getPosts());
            })
        }
        setUpdateModal(false);
    }

    // useEffect(() => {
    //     dispatch(getComments(post.idposts))
    // })

    const handleComment = () => {
        // dispatch(getComments(post.idposts));
        setModalComment(!modalComment)
    }

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
                <i className="fas fa-comments icon_comment" onClick={handleComment}></i>
                <i className="far fa-thumbs-up icon_like"></i>
                {modalComment &&
                    <div className='comments_bloc'>
                        <CommentCard post={post} key={post.idposts} />
                        <textarea defaultValue='Ajouter un commentaire'/>
                        <button>Envoyer</button>
                    </div> 
                } 
            </footer>
        </article>
    );
};

export default Card;