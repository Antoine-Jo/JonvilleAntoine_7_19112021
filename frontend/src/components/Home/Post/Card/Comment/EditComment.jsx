import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, getComments, updateComment } from '../../../../../actions/comment_actions';
import { UidContext } from '../../../../AppContext';

const EditComment = ({ comment, post }) => {
    const userData = useSelector((state) => state.userReducer);
    const [isAuthor, setIsAuthor] = useState(false);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState('');
    const uid = useContext(UidContext);
    const dispatch = useDispatch();


    const handleEdit = () => {
        if(text) {
            dispatch(updateComment(text, userData.admin, comment.id))
            .then(() => {
                dispatch(getComments(post.idposts))
            })
        }
        setEdit(!edit)
    }

    const deleteCom = () => {
        dispatch(deleteComment(comment.id, userData.admin))
    }

    useEffect(() => {
        const checkAuthor = () => {
            if(uid === comment.userId || userData.admin === 1) {
                setIsAuthor(true)
            }
        }
        checkAuthor();
    }, [uid, comment.userId, userData])


    return (
        <div className='edit_comment_container'>
            {isAuthor && edit === false && (
                <>
                <i className="fas fa-edit edit_comment" onClick={() => setEdit(!edit)}></i>
                <i className="fas fa-trash delete_card" onClick={() => {
                    if (window.confirm('Voulez vous supprimer ce post ?')){ 
                        deleteCom(); 
                    }
                }}></i>
                </>
            )}
            {isAuthor && edit && (
                <>
                    <label htmlFor="edit">
                    <textarea id='edit' defaultValue={comment.text} onChange={e => setText(e.target.value)} className='edit_comment_text' />
                    <button onClick={handleEdit} className='edit_comment_btn'>Envoyer les modifications</button>
                    </label>
                </>
            )}
        </div>
    );
};

export default EditComment;