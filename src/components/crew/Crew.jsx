import React from 'react'
import Navbar from '../navbar/Navbar'
import './crew.css'


const Crew = () => {
    return (
        <div className='crew'>
            <Navbar />
            <div className="crew__A">Douglas Hurley</div>
            <div className="crew__B">MARK SHUTTLEWORTH</div>
            <div className="crew__C">Victor Glover</div>
            <div className="crew__D">Anousheh Ansari</div>
        </div>
    )
}

export default Crew