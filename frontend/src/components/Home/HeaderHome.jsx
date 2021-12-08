import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { UidContext } from '../AppContext';
import { useContext } from 'react';

const HeaderHome = () => {
    const uid = useContext(UidContext)
    
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
            {uid ? (
                <>
                <h3 className='title_header'>User Name</h3>
                <Link to='/profil/{user.id}' className='link_header'><i className="far fa-id-card profil"></i></Link>
                <Link to='/' className='link_header' onClick={logout}><i className="fas fa-sign-out-alt signout"></i></Link>
                </>
            ): (
                <>
                <h3>Veuillez vous connecter pour accéder au réseau social.</h3>
                <Link to='/' className='link_header' onClick={logout}><i className="fas fa-sign-in-alt signout"></i></Link>
                </>
            )}
        </div>
    );
};

export default HeaderHome;