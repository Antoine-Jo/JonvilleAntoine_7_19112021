import React, { useEffect } from 'react';
import '../components/Home/home.css';
import Banner from '../components/Header/Banner';
import HeaderHome from '../components/Home/HeaderHome';
import Posts from '../components/Home/Posts';
import axios from 'axios';

const Home = () => {

    // useEffect(() => {
    //     setEmailErr(validEmail(email))
    //     setPwdErr(validPassword(password))
    // }, [email, password])
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