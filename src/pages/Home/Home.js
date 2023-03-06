import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        document.title = 'Mon portfolio'
    })
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
