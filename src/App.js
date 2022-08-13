import React from 'react'

import { Crew, Home, Technology, Destination } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/destination' element={<Destination />} />
                    <Route path='/crew' element={<Crew />} />
                    <Route path='/technology' element={<Technology />} />
                </Routes>
            </Router>

        </div>
    )
}

export default App