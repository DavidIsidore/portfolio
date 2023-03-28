import React from 'react'
import './button.scss'
import { Link } from 'react-router-dom'

export default function Button() {
    return (
        <button className="button">
            <Link to="/">
                <p className="button_text">Retour à l'accueil</p>
            </Link>
        </button>
    )
}
