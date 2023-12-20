import React from 'react'

import IntroFade from './components/IntroFade'
import Topbar from './components/Topbar'

import Hero from './components/Hero'
import Tech from './components/Tech'

import About from './components/About'
import History from './components/History'
import Leadership from './components/Leadership'
// import Socials from './components/Socials';

import Recruitment from './components/Recruitment'
import ProjectCarousel from './components/Carousel'

export default function App() {
    return (
        <div>
            <IntroFade/>
            <Topbar/>

            <Hero/>
            <Tech/>

            <About/>
            <Leadership/>
            <History/>
            <Recruitment/>
            {/* <Socials/> */}
            <ProjectCarousel/>
        </div>
    );
}