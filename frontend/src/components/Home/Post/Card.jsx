import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/AvatarP7.png'

const Card = ({ post }) => {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <article className='post_container' key={post.idposts}>
            <img src={logo} alt='avatar author' className='logo_user'/>
            <div className='post_header'>
                <Link to={'profil/' + post.id}><h3>{post.name} {post.firstname}</h3></Link>
                <p>{post.createdate}</p>
            </div>
            <p className='post_text'>{post.text}</p>
            <footer className='post_footer'>
                <i className="fas fa-comments icon_comment"></i>
                <i className="far fa-thumbs-up icon_like"></i>
            </footer>
        </article>
    );
};

export default Card;