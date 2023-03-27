import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

export default function Card(id, img, title) {
    return (
        <Link to={`/projets/${id}`} className="card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </Link>
    )
}
