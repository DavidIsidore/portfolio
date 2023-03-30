import React from 'react'
import Bandeau from '../../components/Bandeau/Bandeau'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import html from '../../assets/html5.svg'
import css from '../../assets/css3-alt.svg'
import js from '../../assets/square-js.svg'
import react from '../../assets/react.svg'
import figma from '../../assets/figma.svg'
import wordpress from '../../assets/wordpress.svg'
import './about.scss'

export default function About() {
    return (
        <div>
            <Bandeau />
            <Header />
            <div className="about_text">
                <p>
                    Jeune talent en devenir, je me suis formé au développement
                    Web sur la plateforme OpenClassrooms suite à une
                    reconversion professionnelle.
                </p>
                <p>
                    {' '}
                    Passionné depuis de longues années par le milieu de
                    l'informatique, j'ai décidé de m'orienter vers le
                    Développement afin de participer à la mise en place du Web
                    de demain.
                </p>
                <p>
                    {' '}
                    Rigoureux et curieux mais pas encore assez expérimenté,
                    j'apporte toutefois avec moi de solides années d'expérience
                    issues du monde de l'industrie et une envie d'apprendre qui
                    n'a d'égale que celle de me perfectionner.
                </p>
            </div>
            <div className="about_text">
                <h2 className="about_text_title">
                    Les outils avec lesquels j'ai travaillé
                </h2>
                <ul className="list">
                    <li>
                        <img src={html} alt="HTML" className="list_icon" />
                    </li>
                    <li>
                        <img src={css} alt="HTML" className="list_icon" />
                    </li>
                    <li>
                        <img src={js} alt="HTML" className="list_icon" />
                    </li>
                    <li>
                        <img src={react} alt="HTML" className="list_icon" />
                    </li>
                    <li>
                        <img src={figma} alt="HTML" className="list_icon" />
                    </li>
                    <li>
                        <img src={wordpress} alt="HTML" className="list_icon" />
                    </li>
                </ul>
            </div>
            <Button />
            <Footer />
        </div>
    )
}
