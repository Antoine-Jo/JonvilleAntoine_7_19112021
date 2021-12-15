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

    useEffect(() => {
        dispatch(getComments(post.idposts))
    }, [dispatch])

    const handleComment = () => {

    }

    return (
        <div className='comments_container' key={post.idposts}>
            {commentsData.map((comment) => {
                if (comment === 0) return (<p>Il n'y a aucune commentaire...</p>)
                if (post.idposts === comment.postId) {
                    return (
                        <div className='bloc_comment'>{usersData.map((user) => {
                                if (user.id === comment.userId) return <h4>{user.name} {user.firstname}</h4>
                                return null
                            })} 
                        <p>{dateParser(comment.create_time)}</p>
                        <p>{comment.text}</p>
                        </div>
                    )
                } 
            })}
        </div>
    );
};

export default CommentCard;