import React from 'react'
import computer from '../../assets/Computer.png'
//import photo from '../../assets/Photo.png'
import photo_presentation from './../assets/Photo_présentation.jpg'
import './presentation.scss'
import { Link } from 'react-router-dom'

export default function Presentation() {
    return (
        <main className="presentation">
            <div className="presentation_text">
                <p>
                    Bienvenue ! Vous êtes au bon endroit si vous cherchez un
                    développeur Front-End, quel que soit votre projet .
                </p>{' '}
                <p>
                    Dans un projet, les compétences sont aussi importantes que
                    la personne.
                </p>
                <p>Que voulez-vous découvrir en premier? </p>
            </div>
            <div className="presentation_block">
                <Link to="/about" className="presentation_block_img">
                    <div>
                        <img
                            src={photo_presentation}
                            alt="identité"
                            className="presentation_block_img_single"
                        />
                        <p className="presentation_block_text">La personne</p>
                    </div>
                </Link>
                <Link to="/projets" className="presentation_block_img">
                    <div>
                        <img
                            src={computer}
                            alt="représentation écran"
                            className="presentation_block_img_single"
                        />
                        <p className="presentation_block_text">
                            Le développeur
                        </p>
                    </div>
                </Link>
            </div>
        </main>
    )
}
