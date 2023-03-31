import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
//import Content from '../../components/Content/Content'
import Bandeau from '../../components/Bandeau/Bandeau'
import Presentation from '../../components/Presentation/Presentation'
import './home.scss'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        document.title = 'Accueil'
    })
    return (
        <div>
            <Bandeau />
            <Header />
            <Presentation />
            <Footer />
        </div>
    )
}
