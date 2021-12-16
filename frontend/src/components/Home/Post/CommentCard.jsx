import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../../actions/comment_actions';
import { dateParser } from '../../../services/DateForm';
import { UidContext } from '../../AppContext';
import EditComment from './EditComment';

const CommentCard = ({ post }) => {
    const userData = useSelector((state) => state.userReducer)
    const usersData = useSelector((state) => state.usersReducer)
    const commentsData = useSelector((state) => state.commentReducer);
    const uid = useContext(UidContext)
    const dispatch = useDispatch();
    const [editText, setEditText] = useState(null);
    const [editModal, setEditModal] = useState(false)

    // TODO Test de mettre le useEffect dans le component Card...
    useEffect(() => {
        dispatch(getComments(post.idposts))
    }, [dispatch])

    const handleComment = () => {

    }

    return (
        <div className='comments_container'>
            {commentsData.map((comment) => {
                if (post.idposts === comment.postId) {
                    return (
                        <div className='bloc_comment' key={comment.id}>
                            {usersData.map((user) => {
                                if (user.id === comment.userId) return <h4 className='comment_title' key={comment.id}>{user.name} {user.firstname}</h4>
                                return null
                            })}
                        {/* {(comment.userId === uid || userData.admin === 1) && (
                            <i className="fas fa-edit edit_card" onClick={() => setEditModal(!editModal)} key={comment.id}></i>
                        )}  */}
                        <p className='comment_date'>{dateParser(comment.create_time)}</p>
                        <p className='comment_text'>{comment.text}</p>
                        <EditComment comment={comment} post={post} />
                        </div>
                    )
                }
            return null 
            })}
        </div>
    );
};

export default CommentCard;