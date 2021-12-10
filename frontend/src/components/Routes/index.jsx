import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Subscription from '../../pages/Subscription'
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import NotFound from '../../pages/NotFound';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Subscription />} />
                <Route path="/home" element={<Home />} />
                <Route path='/profil/'>
                    <Route path='me' element={<Profil />}/>
                </Route>
                <Route path='/*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;