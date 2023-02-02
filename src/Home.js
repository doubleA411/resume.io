import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Header />
            <Hero />
        </div>
    )
}

export default Home