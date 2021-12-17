import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments } from '../../actions/comment_actions';
import { getPosts } from '../../actions/post_actions';
import Card from './Post/Card';

const Posts = () => {
    const [loadPost, setLoadPost] = useState(true)
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer)

    useEffect(() => {
        if (loadPost) {
            dispatch(getPosts())
            dispatch(getAllComments())
            setLoadPost(false)
        }
    }, [loadPost, dispatch])
    
    return (
        <section>
           {posts.map((post) => {
                    return <Card post={post} key={post.idposts}/>
                })
           }
        </section>
    );
};

export default Posts;