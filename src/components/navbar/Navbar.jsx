import React from 'react'
import Logo from '../../assets/shared/logo.svg'

import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar' >
            <img src={Logo} alt="logo" className='navbar__logo' />
            <div className='navbar__rectangle'></div>
            <div className='navbar__navigation'>
                <div className='navbar__navigation-items'>
                    <ul>
                        <li>
                            <Link to="/">
                                <li>
                                    <p>00</p>
                                    <p>HOME</p>
                                </li>
                            </Link>
                        </li>
                        <li>
                            <Link to="/destination">
                                <li>
                                    <p>01</p>
                                    <p>DESTINATION</p>
                                </li>

                            </Link>
                        </li>
                        <li>
                            <Link to="/crew">
                                <li>
                                    <p>02</p>
                                    <p>CREW</p>
                                </li>

                            </Link>
                        </li>
                        <li>
                            <Link to="/technology">
                                <li>
                                    <p>03</p>
                                    <p>TECHNOLOGY</p>
                                </li>

                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='underline__indicator'></div>
            </div>
        </div>
    )
}

export default Navbar