import React from 'react';
import Banner from '../components/Header/Banner';
import HeaderHome from '../components/Home/HeaderHome';
import Posts from '../components/Home/Posts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HeaderHome/>
            <Posts/>
        </div>
    );
};

export default Home;