import React from 'react'

import { Crew, Home, Technology, Destination } from './components';
import { Routes, Route } from 'react-router-dom';

import './App.css'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/' element={<Destination />} />
                <Route path='/' element={<Crew />} />
                <Route path='/' element={<Technology />} />
            </Routes>

        </div>
    )
}

export default App