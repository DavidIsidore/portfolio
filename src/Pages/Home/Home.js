import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Content from '../../components/Content/Content'
import Bandeau from '../../components/Bandeau/Bandeau'

export default function Home() {
    return (
        <div>
            <Bandeau />
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
