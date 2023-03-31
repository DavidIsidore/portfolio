import React from 'react'
import Navbar from '../Navbar/Navbar'
import './header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="header_presentation">
                <h1>David ISIDORE</h1>
                <h2>Développeur Front-End</h2>
            </div>
            <Navbar />
        </div>
    )
}
