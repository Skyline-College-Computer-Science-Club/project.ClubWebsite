import React from 'react'

import IntroFade from './components/IntroFade';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Contact from './components/Contact';
import History from './components/History'
import Leadership from './components/Leadership';
// import Socials from './components/Socials';
import ProjectCarousel from './components/Carousel';

export default function App() {
    return (
        <div>
            <IntroFade/>
            <Topbar/>
            <Hero/>
            <About/>
            <Leadership/>
            <Tech/>
            <History/>
            <Contact/>
            {/* <Socials/> */}
            <ProjectCarousel/>
        </div>
    );
}