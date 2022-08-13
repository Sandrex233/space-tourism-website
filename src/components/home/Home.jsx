import React from 'react'

import { Navbar } from '../../components';
import './home.css'


const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='large-button'><p>EXPLORE</p></div>
        </div>
    )
}

export default Home