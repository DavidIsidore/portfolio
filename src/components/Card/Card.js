import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

export default function Card({ id, img, title, link }) {
    return (
        <Link to={link} className="card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </Link>
    )
}
