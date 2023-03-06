import React from 'react'
import logoGit from '../../assets/github.svg'
import logo_linked from '../../assets/linkedin.svg'
import logo_arch from '../../assets/archlinux.svg'
import './footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className="logos">
                <img src={logoGit} className="logoGit" alt="Logo Github" />
                <img
                    src={logo_linked}
                    className="logoLinked"
                    alt="Logo LinkedIn"
                />
            </div>
            <div className="stack_dev">
                <p>Développé sous :</p>
                <img
                    src={logo_arch}
                    className="logoArch"
                    alt="Logo Archlinux"
                />
            </div>
        </div>
    )
}
