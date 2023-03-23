import React from 'react'
import './content.scss'
import computer from '../../assets/Computer.png'
import photo from '../../assets/Photo.png'

export default function Content() {
    return (
        <main className="content">
            <div className="content_text">Bla Bla</div>
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
