import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Subscription from '../../pages/Subscription'
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Subscription />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profil/:userid" element={<Profil />} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;