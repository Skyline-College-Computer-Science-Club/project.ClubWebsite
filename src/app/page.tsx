'use client'

import React from 'react'

import { Element } from 'react-scroll'
import Typed from 'react-typed'

import { HomeCollection } from '../dispositions/gallery'

import IntroFade from '../components/IntroFade'

import Hero from '../components/Hero'
import Technologies from '../components/Technologies'

import About from '../components/About'
import Gallery from '../components/Gallery'

import History from '../components/History'
import Leadership from '../components/Leadership'
// import Socials from './components/Socials';

import Recruitment from '../components/Recruitment'

import Footer from '../components/Footer'

const SECTION_TYPED_KEYWORDS = ["Social Events", "Hackathons", "Technology Workshops", "Field Trips", "Club Projects", "Community Collaborations"]

export default function App() {
    return (
        <div>
            <IntroFade />

            <Hero />
            <Leadership />

            <Technologies />

            <About />

            <div className="w-full bg-gradient-to-b from-slate-900 via-black to-black py-20">

                <h1 className="title-main mx-auto text-2xl text-center sm:text-4xl font-extrabold text-white">
                    <span className="text-shadow shadow-gray-700">Journey with us in&nbsp;</span>
                    <Typed
                        strings={SECTION_TYPED_KEYWORDS} typeSpeed={50} backSpeed={75} backDelay={3000} loop
                        className="bg-gradient-to-t from-yellow-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(225,200,255,0.5)]"
                    ></Typed>
                </h1>

                <Element name="gallery"/>
                <Gallery collection={HomeCollection} />

            </div>
            
            <History />
            <Recruitment />
            {/* <Socials/> */}

            <Footer />
        </div>
    )
}