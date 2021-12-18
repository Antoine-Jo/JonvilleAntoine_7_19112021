import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Post/Card';

const Posts = () => {
    const posts = useSelector((state) => state.allPostsReducer)
    
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