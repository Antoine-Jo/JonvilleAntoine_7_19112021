import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post_actions';
import Card from './Post/Card';

const Posts = () => {
    const posts = useSelector((state) => state.allPostsReducer)
    const dispatch = useDispatch()

    const handlePost = () => {
        dispatch(getPosts());
    }

    return (
        <section>
            <i className="fas fa-sync refresh-posts" onClick={handlePost}></i>
           {posts.map((post) => {
                    return <Card post={post} key={post.idposts}/>
                })
           }
        </section>
    );
};

export default Posts;