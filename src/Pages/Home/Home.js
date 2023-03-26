import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
//import Content from '../../components/Content/Content'
import Bandeau from '../../components/Bandeau/Bandeau'
import Presentation from '../../components/Presentation/Presentation'
import './home.scss'

export default function Home() {
    return (
        <div>
            <Bandeau />
            <Header />
            <Presentation />
            <Footer />
        </div>
    )
}
