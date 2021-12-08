import React, { useEffect } from 'react';
import '../components/Home/home.css';
import Banner from '../components/Header/Banner';
import HeaderHome from '../components/Home/HeaderHome';
import Posts from '../components/Home/Posts';
import axios from 'axios';

const Home = () => {
   
    
    useEffect(() => {
        const fetch = async () => {
            await axios({
                method:'GET',
                mode: 'cors',
                url: `http://localhost:5000/api/post/`,
                withCredentials: 'true'
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            })
        }
        fetch()
    })

    return (
        <div>
            <Banner/>
            <HeaderHome/>
            <Posts/>
        </div>
    );
};

export default Home;