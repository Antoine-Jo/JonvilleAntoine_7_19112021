import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderHome = () => {
    
    const logout = async (e) => {
        await axios({
            method: 'GET',
            mode: 'cors',
            withCredentials: 'true',
            url: 'http://localhost:5000/api/user/logout',
        })
    }

    return (
        <div className='header_container'>
            <h3 className='title_header'>User Name</h3>
            <Link to='/profil/{user.id}' className='link_header'><i className="far fa-id-card profil"></i></Link>
            <Link to='/' className='link_header' onClick={logout}><i className="fas fa-sign-out-alt signout"></i></Link>
        </div>
    );
};

export default HeaderHome;