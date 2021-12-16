import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UidContext } from '../AppContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions/user_actions';

const HeaderHome = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = async (e) => {
        dispatch(logOut())
        navigate('/')
    }

    const viewProfil = () => {
        navigate(`/profil/me`)
    }

    return (
        <div className='header_container'>
            {uid ? (
                <>
                <h3 className='title_header'>Bienvenue {userData.name} {userData.firstname}</h3>
                <i className="far fa-id-card profil" onClick={viewProfil}></i>
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