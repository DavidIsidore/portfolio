import React from 'react'
import booki from '../../assets/Booki.png'
import food from '../../assets/ohmyfood.png'
import panthere from '../../assets/la_panthere.png'
import kasa from '../../assets/Kasa.svg'
import { Link } from 'react-router-dom'
import './realisations.scss'

export default function Realisations() {
    return (
        <div className="main">
            <div>
                <h1>Mes réalisations</h1>
                <h2>Dans le cadre de ma formation de Développeur Web</h2>

                <div className="realisations">
                    <Link
                        to="https://davidisidore.github.io/Livrables-P2/"
                        target="_blank"
                    >
                        <img
                            src={booki}
                            alt="logo Booki"
                            className="realisations_logo"
                        />
                    </Link>

                    <Link
                        to="https://davidisidore.github.io/Projet3/"
                        target="_blank"
                    >
                        <img
                            src={food}
                            alt="logo OhMyFood"
                            className="realisations_logo"
                        />
                    </Link>
                    <Link
                        to="https://davidisidore.github.io/LaPanthere/"
                        target="_blank"
                    >
                        <img
                            src={panthere}
                            alt="logo La Panthère"
                            className="realisations_logo"
                        />
                    </Link>

                    <Link
                        to="https://davidisidore.github.io/Kasa/"
                        target="_blank"
                    >
                        <img
                            src={kasa}
                            alt="logo Kasa"
                            className="realisations_logo"
                        />
                    </Link>
                </div>
            </div>
            <div>
                <h2>Autres travaux</h2>
                <div className="wordpress">
                    <p className="wordpress_text">
                        Avant de commencer ma formation de développeur Web, je
                        m'étais déjà frotté à la création de contenu en
                        réalisant le site d'une amie psychopraticienne sous
                        Wordpress.
                    </p>
                    <Link
                        to="https://caroline-gayral.com/"
                        target="_blank"
                        className="link"
                    >
                        <p className="wordpress_text_link">
                            caroline-gayral.com
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
