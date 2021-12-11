import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts, updatePost } from '../../../actions/post_actions';
import logo from '../../../images/AvatarP7.png'
import { UidContext } from '../../AppContext';

const Card = ({ post }) => {

    // const [isLoading, setIsLoading] = useState(true);
    const [modalComment, setModalComment] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const uid = useContext(UidContext);
    const dispatch = useDispatch();

    const [editMessage, setEditMessage] = useState(post.text)

    const showComments = () => {
        setModalComment(true)
    }

    const showEdit = () => {
        setUpdateModal(true);
    }

    const update = () => {
        // e.preventDefault();

        
        // console.log(data, uid);
        dispatch(updatePost(editMessage, post.idposts, uid))
        .then(() => {
            dispatch(getPosts());

        })
    }


    return (
        <article className='post_container' key={post.idposts}>
            <img src={logo} alt='avatar author' className='logo_user'/>
            <div className='post_header'>
                <h3>{post.name} {post.firstname}</h3>
                <p>{post.createdate}</p>
                {post.id === uid && <i className="fas fa-edit" onClick={showEdit}>
                        {updateModal && 
                        <>
                            <textarea name='message' id='message' placeholder={editMessage} value={editMessage} onChange={e => setEditMessage(e.target.value)}/>
                            <button onClick={update}>Envoyer</button>
                            <button>Annuler</button>
                        </>    
                        }
                    </i>}
            </div>
            <p className='post_text'>{post.text}</p>
            <footer className='post_footer'>
                <i className="fas fa-comments icon_comment" onClick={showComments}>
                    {modalComment && <h3>Hello World !</h3>}
                </i>
                <i className="far fa-thumbs-up icon_like"></i>
            </footer>
        </article>
    );
};

export default Card;