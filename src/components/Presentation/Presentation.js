import React from 'react'
import computer from '../../assets/Computer.png'
import photo from '../../assets/Photo.png'

export default function Presentation() {
    return (
        <main>
            <div className="content_text">
                Hello! Vous êtes au bon endroit pour en savoir un peu plus sur
                moi. Mais, pour commencer, qui voulez-vous connaître mieux en
                premier?
            </div>
            <div className="content_presentation">
                <div className="content_presentation_img">
                    <img src={photo} alt="identité" />
                </div>
                <div className="content_presentation_img ">
                    <img
                        src={computer}
                        alt="représentation écran"
                        className="img_single"
                    />
                </div>
            </div>
        </main>
    )
}
