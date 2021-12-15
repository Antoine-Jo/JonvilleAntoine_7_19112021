import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CommentCard = ({ post }) => {
    const [text, setText] = useState('');
    const userData = useSelector((state) => state.userReducer)
    const usersData = useSelector((state) => state.usersReducer)
    const commentsData = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();
    console.log(commentsData);
    const handleComment = () => {

    }

    return (
        <div className='comments_container' key={post.idposts}>
            {commentsData.map((comment) => {
                return (
                    <div className='comment_bloc' key={commentsData.id}>
                        <h3 className='comment_name'>{comment.userId}</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default CommentCard;