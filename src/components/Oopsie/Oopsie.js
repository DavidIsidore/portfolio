import React from 'react'
import Button from '../../components/Button'
import './oppsie.scss'

export default function Oopsie() {
    return (
        <div className="error">
            <p className="error_number">404</p>
            <p className="error_text">Oups !</p>
            <p className="error_text">
                La page que vous cherchez n'existe pas.
            </p>
            <Button />
        </div>
    )
}
