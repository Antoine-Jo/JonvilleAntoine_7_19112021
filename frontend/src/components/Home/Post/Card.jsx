import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../actions/user_actions';
import logo from '../../../images/AvatarP7.png'
import { UidContext } from '../../AppContext';

const Card = ({ post }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const uid = useContext(UidContext)

    const [isLoading, setIsLoading] = useState(true);

    const handleProfil = () => {
        dispatch(getUser(post.id))
        if (post.id === uid) {
            navigate('/profil/me')
        } else {
            navigate(`/profil/${post.id}`)
        }
    }

    return (
        <article className='post_container' key={post.idposts}>
            <img src={logo} alt='avatar author' className='logo_user'/>
            <div className='post_header'>
                <h3 onClick={handleProfil}>{post.name} {post.firstname}</h3>
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