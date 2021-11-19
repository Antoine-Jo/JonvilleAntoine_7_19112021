import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Subscription from '../../pages/Subscription'
import Home from '../../pages/Home';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Subscription />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default index;