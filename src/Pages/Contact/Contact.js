import React from 'react'
import Header from '../../components/Header/Header'
import Bandeau from '../../components/Bandeau/Bandeau'
import Footer from '../../components/Footer/Footer'
import './contact.scss'
import Callme from '../../components/Callme/Callme'
import { useEffect } from 'react'

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact'
    })
    return (
        <main>
            <Bandeau />
            <Header />
            <Callme />
            <Footer />
        </main>
    )
}
