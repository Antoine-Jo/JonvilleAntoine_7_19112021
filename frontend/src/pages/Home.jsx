import React, { useContext } from 'react';
import '../components/Home/home.css';
import Banner from '../components/Header/Banner';
import HeaderHome from '../components/Home/HeaderHome';
import Posts from '../components/Home/Posts';
import { UidContext } from '../components/AppContext';
import Subscription from './Subscription';
import AddPost from '../components/Home/Post/AddPost';

const Home = () => {
   const uid = useContext(UidContext)

    return (
        <div>
            {uid ? (
            <>
                <Banner/>
                <HeaderHome/>
                <AddPost/>
                <Posts/>
            </>
            ) : (
            <>
                <HeaderHome/>
                <Subscription/>
            </>
            )}
        </div>
    );
};

export default Home;