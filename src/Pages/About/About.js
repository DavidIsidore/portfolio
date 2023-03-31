import React, { useEffect } from 'react'
import Bandeau from '../../components/Bandeau/Bandeau'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import Content from '../../components/Content/Content'
//import {useEffect } from 'react'

export default function About() {
    useEffect(() => {
        document.title = 'À propos'
    })
    return (
        <div>
            <Bandeau />
            <Header />
            <Content />

            <Footer />
        </div>
    )
}
