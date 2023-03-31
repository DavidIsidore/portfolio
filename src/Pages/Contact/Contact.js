import React from 'react'
import Header from '../../components/Header/Header'
import Bandeau from '../../components/Bandeau/Bandeau'
import Footer from '../../components/Footer/Footer'
import './contact.scss'
import Button from '../../components/Button/Button'
import Callme from '../../components/Callme/Callme'

export default function Contact() {
    return (
        <main>
            <Bandeau />
            <Header />
            <Callme />

            <Footer />
        </main>
    )
}
