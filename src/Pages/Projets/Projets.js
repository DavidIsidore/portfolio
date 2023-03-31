import React from 'react'
import Bandeau from '../../components/Bandeau/Bandeau'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Realisations from '../../components/Realisations/Realisations'
import { useEffect } from 'react'

export default function Projets() {
    useEffect(() => {
        document.title = 'Projets'
    })
    return (
        <div>
            <Bandeau />
            <Header />
            <Realisations />

            <Footer />
        </div>
    )
}
