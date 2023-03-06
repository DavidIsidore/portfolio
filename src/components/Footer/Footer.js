import React from 'react'
import logoGit from '../../assets/github.svg'
import logo_linked from '../../assets/linkedin.svg'
import logo_arch from '../../assets/archlinux.svg'
export default function Footer() {
    return (
        <div>
            <div className="logos">
                <img src={logoGit} alt="Logo Github" />
                <img src={logo_linked} alt="Logo LinkedIn" />
            </div>
            <div className="stack_dev">
                <p>Développé sous :</p>
                <img src={logo_arch} alt="Logo Archlinux" />
            </div>
        </div>
    )
}
