import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HeaderHome = () => {
    return (
        <div className='header_container'>
            <h3 className='title_header'>User Name</h3>
            <Link to='/profil/{user.id}' className='link_header'>Votre profil</Link>
            <Link to='/' className='link_header'>Se déconnecter</Link>
        </div>
    );
};

export default HeaderHome;