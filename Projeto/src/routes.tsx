import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Home} from './pages/Home';
import { Developer } from './pages/Developer';
import { Marketer } from './pages/Marketer';
import { GrowthHacker } from './pages/GrowthHacker';

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/developer" element={<Developer/>} />
                <Route path="/marketer" element={<Marketer/>} />
                <Route path="/growth-hacker" element={<GrowthHacker/>} />
            </Routes>
        </Router>
    );
}