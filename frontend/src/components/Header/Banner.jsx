import React from 'react';
import Logo from '../../images/icon-left-font-monochrome-white.svg'
import '../../styles/banner.css'

const Banner = () => {
    return (
        <header className='header'>
            <img src={Logo} alt="Logo Groupomania" className='header_logo' />
            <h1 className="header_title">Réseau social d'entreprise</h1>
        </header>
    );
};

export default Banner;
