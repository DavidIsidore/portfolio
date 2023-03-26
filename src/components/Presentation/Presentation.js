import React from 'react'
import computer from '../../assets/Computer.png'
import photo from '../../assets/Photo.png'
import './presentation.scss'

export default function Presentation() {
    return (
        <main className="presentation">
            <div className="presentation_text">
                <p>
                    Hello! Vous êtes au bon endroit pour en savoir un peu plus
                    sur moi.
                </p>{' '}
                <p>Qui voulez-vous découvrir en premier? </p>
            </div>
            <div className="presentation_block">
                <div className="presentation_block_img">
                    <img src={photo} alt="identité" className="img_single" />
                    <p className="presentation_block_text">La personne</p>
                </div>
                <div className="presentation_block_img">
                    <img
                        src={computer}
                        alt="représentation écran"
                        className="img_single"
                    />
                    <p className="presentation_block_text">Le développeur</p>
                </div>
            </div>
        </main>
    )
}
