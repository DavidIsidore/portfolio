import React from 'react'
import './content.scss'
import computer from '../../assets/Computer.png'

export default function Content() {
    return (
        <main className="content">
            <div className="content_text">Bla Bla</div>
            <div className="content_presentation">
                <div></div>
                <div>
                    <img src={computer} alt="image écran" />
                </div>
            </div>
        </main>
    )
}
