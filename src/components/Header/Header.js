import React from "react";
import logo from '../../logo.svg'

export default function Header() {
    return(
        <div className="header">
            <img src={logo} alt="logo" />
            <div>
                <h1>David ISIDORE</h1>
                <h2>Développeur Front-End Junior</h2>
            </div>
        </div>
    )
}