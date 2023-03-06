import React from 'react'
import './content.css'
import { Link } from 'react-router-dom'

export default function Content() {
    return (
        <main className="content">
            <div className="content_about">
                <Link to="/about">Qui suis-je</Link>
            </div>
            <div className="content_way">
                <Link to="myway">Mon parcours</Link>
            </div>
            <div className="content_done">
                <Link to="myworks">Mes réalisations</Link>
            </div>
        </main>
    )
}
