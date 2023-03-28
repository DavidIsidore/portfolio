import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
//import Content from '../../components/Content/Content'
import Bandeau from '../../components/Bandeau/Bandeau'
import Presentation from '../../components/Presentation/Presentation'
import './home.scss'
import Button from '../../components/Button/Button'

export default function Home() {
    return (
        <div>
            <Bandeau />
            <Header />
            <Presentation />
            <Button />
            <Footer />
        </div>
    )
}
