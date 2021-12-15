import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../../actions/comment_actions';
import { dateParser } from '../../../services/DateForm';

const CommentCard = ({ post }) => {
    const [text, setText] = useState('');
    const userData = useSelector((state) => state.userReducer)
    const usersData = useSelector((state) => state.usersReducer)
    const commentsData = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();

    // TODO Test de mettre le useEffect dans le component Card...
    useEffect(() => {
        dispatch(getComments(post.idposts))
    }, [dispatch])

    const handleComment = () => {

    }

    return (
        <div className='comments_container' key={post.idposts}>
            {commentsData.map((comment) => {
                if (post.idposts === comment.postId) {
                    return (
                        <div className='bloc_comment' key={comment.id}>
                            {usersData.map((user) => {
                                if (user.id === comment.userId) return <h4 className='comment_title' key={comment.id}>{user.name} {user.firstname}</h4>
                                return null
                            })} 
                        <p className='comment_date'>{dateParser(comment.create_time)}</p>
                        <p className='comment_text'>{comment.text}</p>
                        </div>
                    )
                }
            return null 
            })}
        </div>
    );
};

export default CommentCard;