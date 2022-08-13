import React from 'react'

import { Crew, Home, Technology, Destination } from './components';

import './App.css'

const App = () => {
    return (
        <div>
            <Home />
            <Destination />
            <Crew />
            <Technology />
        </div>
    )
}

export default App