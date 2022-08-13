import React from 'react'
import Navbar from '../navbar/Navbar'
import './destination.css'
import { Link } from 'react-router-dom'

const Destination = () => {
    return (
        <div className='destination'>
            <Navbar />
            <div className="destination__A">MOON</div>
            <div className="destination__B">MARS</div>
            <div className="destination__C">EUROPA</div>
            <div className="destination__D">TITAN</div>
        </div>
    )
}

export default Destination