import React from 'react'
import phone from '../../assets/phone-solid.svg'
import envelop from '../../assets/envelope-solid.svg'
import linkedin from '../../assets/linkedin.svg'
import { Link } from 'react-router-dom'
import './callme.scss'

export default function Callme() {
    return (
        <div className="join">
            <h1>Comment me joindre :</h1>
            <div className="join_me">
                <div className="call">
                    <img src={phone} alt="telephone" className="join_me_logo" />
                    <p className="join_me_text">06 79 85 25 16</p>
                </div>
                <div className="mail">
                    <img
                        src={envelop}
                        alt="enveloppe"
                        className="join_me_logo"
                    />
                    <a href="mailto:isidoredavid@gmail.com">
                        <p className="join_me_text">isidoredavid@gmail.com</p>
                    </a>
                </div>
                <div className="linked">
                    <Link to="https://www.linkedin.com/in/davidisidore">
                        <img
                            src={linkedin}
                            alt="linkedin"
                            className="join_me_logo"
                        />
                    </Link>

                    <p className="join_me_text">Sur LinkedIn</p>
                </div>
            </div>
        </div>
    )
}
