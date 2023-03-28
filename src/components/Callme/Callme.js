import React from 'react'
import phone from '../../assets/phone-solid.svg'
import envelop from '../../assets/envelope-solid.svg'
import linkedin from '../../assets/linkedin.svg'
import './callme.scss'

export default function Callme() {
    return (
        <div className="join">
            <p>Vous pouvez me joindre</p>
            <div className="join_me">
                <div className="call">
                    <img src={phone} alt="telephone" className="join_me_logo" />
                    <p>06 79 85 25 16</p>
                </div>
                <div className="mail">
                    <img
                        src={envelop}
                        alt="enveloppe"
                        className="join_me_logo"
                    />
                    <p>isidoredavid@gmail.com</p>
                </div>
                <div className="linked">
                    <img
                        src={linkedin}
                        alt="linkedin"
                        className="join_me_logo"
                    />
                    <p>Sur LinkedIn</p>
                </div>
            </div>
        </div>
    )
}
