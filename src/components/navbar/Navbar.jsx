import React from 'react'
import Logo from '../../assets/shared/logo.svg'


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
                            <a href="/">
                                <li>
                                    <p>00</p>
                                    <p>HOME</p>
                                </li>
                            </a>
                        </li>
                        <li>
                            <a href="/destination">
                                <li>
                                    <p>01</p>
                                    <p>DESTINATION</p>
                                </li>

                            </a>
                        </li>
                        <li>
                            <a href="/crew">
                                <li>
                                    <p>02</p>
                                    <p>CREW</p>
                                </li>

                            </a>
                        </li>
                        <li>
                            <a href="/technology">
                                <li>
                                    <p>03</p>
                                    <p>TECHNOLOGY</p>
                                </li>

                            </a>
                        </li>
                    </ul>
                </div>
                <div className='underline__indicator'></div>
            </div>
        </div>
    )
}

export default Navbar