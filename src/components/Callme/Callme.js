import React from 'react'
import phone from '../../assets/phone-solid.svg'
import envelop from '../../assets/envelope-solid.svg'
import './callme.scss'

export default function Callme() {
    return (
        <div>
            <p>Vous pouvez me joindre</p>
            <div className="joinme">
                <div>
                    <img src={phone} alt="telephone" className="joinme_logo" />
                    <p>06 79 85 25 16</p>
                </div>
                <div>
                    <img
                        src={envelop}
                        alt="enveloppe"
                        className="joinme_logo"
                    />
                    <p>isidoredavid@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
