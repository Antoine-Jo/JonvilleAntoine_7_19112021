import React from 'react';
import Banner from '../components/Header/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner/>
            <h1>Je suis l'accueil !</h1>
            <Link to='/profil/:userid'>Votre profil</Link>
        </div>
    );
};

export default Home;