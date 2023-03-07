import React from 'react'
import './content.css'
import { Link } from 'react-router-dom'

export default function Content() {
    return (
        <main className="content">
            <div className="content_single">
                <Link to="/about" className="quisuisje">
                    Qui suis-je
                </Link>
            </div>
            <div className="content_single">
                <Link to="myway" className="myway">
                    Mon parcours
                </Link>
            </div>
            <div className="content_single">
                <Link to="myworks" className="myworks">
                    Mes réalisations
                </Link>
            </div>
        </main>
    )
}
