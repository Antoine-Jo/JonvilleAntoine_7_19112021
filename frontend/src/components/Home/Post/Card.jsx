import React from 'react';
import logo from '../../../images/AvatarP7.png'

const Card = () => {
    return (
        <article className='post_container'>
            <img src={logo} alt='avatar author' className='logo_user'/>
            <div className='post_header'>
                <h3>Auteur du post</h3>
                <p>Date du post</p>
            </div>
            <p className='post_text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sint ratione, maxime at officia dolore eum minus neque vero fugit architecto ea iste voluptates a quod corrupti eos iure repellat?</p>
            <footer className='post_footer'>
                <i className="fas fa-comments icon_comment"></i>
                <i className="far fa-thumbs-up icon_like"></i>
            </footer>
        </article>
    );
};

export default Card;