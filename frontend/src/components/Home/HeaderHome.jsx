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
        .then(() => window.location = '/')
        // .catch((err) => console.log(err))
    }

    return (
        <div className='header_container'>
            {uid ? (
                <>
                <h3 className='title_header'>User Name</h3>
                <Link to='/profil/{user.id}' className='link_header'><i className="far fa-id-card profil"></i></Link>
                <i className="fas fa-sign-out-alt signout" onClick={logout}></i>
                </>
            ): (
                <>
                <h3>Veuillez vous connecter pour accéder au réseau social.</h3>
                </>
            )}
        </div>
    );
};

export default HeaderHome;