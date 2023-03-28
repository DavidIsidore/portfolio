import React from 'react'
import Bandeau from '../../components/Bandeau/Bandeau'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import booki from '../../assets/Booki.png'
import food from '../../assets/ohmyfood.png'
import panthere from '../../assets/la_panthere.png'
import kasa from '../../assets/Kasa.svg'
import { Link } from 'react-router-dom'

export default function Projets() {
    return (
        <div>
            <Bandeau />
            <Header />
            <div>
                <h1>Mes réalisations</h1>
                <h2>Dans le cadre de ma formation de Développeur Web</h2>

                <div>
                    <Link
                        to="https://davidisidore.github.io/Livrables-P2/"
                        target="_blank"
                    >
                        <img src={booki} alt="logo Booki" />
                        Booki
                    </Link>

                    <Link
                        to="https://davidisidore.github.io/Projet3/"
                        target="_blank"
                    >
                        <img src={food} alt="logo OhMyFood" />
                        OhMyFood
                    </Link>

                    <Link
                        to="https://davidisidore.github.io/Kasa/"
                        target="_blank"
                    >
                        <img src={kasa} alt="logo Kasa" /> Kasa
                    </Link>
                </div>
            </div>
            <div>
                <h2>Autres travaux</h2>
                <div>
                    <Link
                        to="https://caroline-gayral.com/"
                        target="_blank"
                        className="link"
                    >
                        caroline-gayral.com
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
