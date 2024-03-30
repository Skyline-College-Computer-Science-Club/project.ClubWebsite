import React from 'react'

import IntroFade from '../components/IntroFade'

import Hero from '../components/Hero'
import Technologies from '../components/Technologies'

import About from '../components/About'
import Gallery from '../components/Gallery'

import History from '../components/History'
import Leadership from '../components/Leadership'
// import Socials from './components/Socials';

import Recruitment from '../components/Recruitment'
import ProjectCarousel from '../components/Carousel'

import Footer from '../components/Footer'

export default function App() {
    return (
        <div>
            <IntroFade/>

            <Hero/>
            <Technologies/>

            <About/>
            <Gallery/>
            
            <Leadership/>
            <History/>
            <Recruitment/>
            {/* <Socials/> */}
            
            {/* <ProjectCarousel/> */}
            <Footer/>
        </div>
    )
}