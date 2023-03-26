import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import home from '../../assets/house-solid.svg'
import user from '../../assets/user-solid.svg'
import code from '../../assets/code-solid.svg'
import envelop from '../../assets/envelope-solid.svg'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li className="accueil">
                    <Link to="/">
                        <img src={home} alt="home" className="nav_list_logo" />
                        Accueil
                    </Link>
                </li>
                <li className="about">
                    <Link to="/about">
                        <img src={user} alt="user" className="nav_list_logo" />
                        Qui suis-je
                    </Link>
                </li>
                <li className="projets">
                    <Link to="/projets">
                        <img src={code} alt="code" className="nav_list_logo" />
                        Mes projets
                    </Link>
                </li>
                <li className="contact">
                    <Link to="/contact">
                        <img
                            src={envelop}
                            alt="enveloppe"
                            className="nav_list_logo"
                        />{' '}
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
