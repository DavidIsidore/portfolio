import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
//import home from '../../assets/house-solid.svg'
//import user from '../../assets/user-solid.svg'
//import code from '../../assets/code-solid.svg'
//import envelop from '../../assets/envelope-solid.svg'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()

    return (
        <nav className="nav">
            <ul className="nav_list">
                <li className="accueil">
                    <Link to="/">
                        <p
                            className={
                                location.pathname === '/'
                                    ? 'nav_list_text_active'
                                    : 'nav_ist_text'
                            }
                        >
                            Accueil
                        </p>
                    </Link>
                </li>
                <li className="about">
                    <Link to="/about">
                        <p
                            className={
                                location.pathname === '/about'
                                    ? 'nav_list_text_active'
                                    : 'nav_list_text'
                            }
                        >
                            Qui suis-je
                        </p>
                    </Link>
                </li>
                <li className="projets">
                    <Link to="/projets">
                        <p
                            className={
                                location.pathname === '/projets'
                                    ? 'nav_list_text_active'
                                    : 'nav_list_text'
                            }
                        >
                            Mes projets
                        </p>
                    </Link>
                </li>
                <li className="contact">
                    <Link to="/contact">
                        <p
                            className={
                                location.pathname === '/contact'
                                    ? 'nav_list_text_active'
                                    : 'nav_list_text'
                            }
                        >
                            Contact
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
