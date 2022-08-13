import React from 'react'

import { Navbar } from '../../components';
import './home.css'


const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='home__header'>
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well <br />
                    genuinely go to outer space and not hover kind of on the <br />
                    edge of it. Well sit back, and relax because we’ll give you a <br />
                    truly out of this world experience!
                </p>
            </div>
            <div className='large-button'><p>EXPLORE</p></div>
        </div>
    )
}

export default Home