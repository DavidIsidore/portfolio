import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li className="accueil">
                    <Link to="/">Accueil</Link>
                </li>
                <li className="contact">
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
