import React from 'react'
import './content.scss'
import html from '../../assets/html5.svg'
import css from '../../assets/css3-alt.svg'
import js from '../../assets/square-js.svg'
import react from '../../assets/react.svg'
import figma from '../../assets/figma.svg'
import wordpress from '../../assets/wordpress.svg'

export default function Content() {
    return (
        <main className="content">
            <div className="content_text">
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
            <div className="content_text">
                <h2 className="content_text_title">
                    Les outils avec lesquels je travaille
                </h2>
                <ul className="content_list">
                    <li>
                        <img
                            src={html}
                            alt="HTML"
                            className="content_list_icon"
                        />
                    </li>
                    <li>
                        <img
                            src={css}
                            alt="HTML"
                            className="content_list_icon"
                        />
                    </li>
                    <li>
                        <img
                            src={js}
                            alt="HTML"
                            className="content_list_icon"
                        />
                    </li>
                    <li>
                        <img
                            src={react}
                            alt="HTML"
                            className="content_list_icon"
                        />
                    </li>
                    <li>
                        <img
                            src={figma}
                            alt="HTML"
                            className="content_list_icon"
                        />
                    </li>
                    <li>
                        <img
                            src={wordpress}
                            alt="HTML"
                            className="content_list_icon"
                        />
                    </li>
                </ul>
            </div>
        </main>
    )
}
