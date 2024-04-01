'use client'

import React from 'react'
import Typed from 'react-typed'
import { Element } from 'react-scroll'

import Image from 'next/image'

import { IoMdArrowRoundDown } from 'react-icons/io'
import { Link } from 'react-scroll'

const TYPED_KEYWORDS = ['Design', 'Pioneer', 'Optimize', 'Build', 'Compile', '3D-Model', 'Deploy', 'Problem-Solve', 'Interpret', 'Collaborate', 'Develop', 'Delegate', '$ git commit']

const mascotAnimated = '/assets/mascot.gif'
const backdrop = '/assets/home/hero_back.jpg'
const heroOverlay = '/assets/home/hero_overlay_gray.gif'

export default function Hero() : React.ReactNode {
    return (
        <div className="w-full h-screen bg-black">
            <Element name="hero"/>

            {/* Actual backdrop image */}
            <Image width={1920} height={1080} className="absolute w-full h-full blur-[0px] object-cover" src={backdrop} alt="background banner" priority/>
            
            {/* Hero .gif overlay */}
            <Image width={1920} height={1080} src={heroOverlay} className="opacity-10 absolute top-0 w-full h-full drop-shadow-lg" alt="overlay" priority/>

            <div className="absolute w-full h-full mx-auto flex flex-col items-center justify-center pb-20">
                
                {/* mascot */}
                <Image width={100} height={100} src={mascotAnimated} alt="mascot" className="z-20 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"/>

                {/* The main texts */}
                <h1 className="z-20 title-main text-xl md:2xl text-center sm:text-5xl text-shadow shadow-black font-bold text-white my-2">Computer Science Club at Skyline</h1>

                <div className="z-20 text-white text-center text-shadow shadow-black sm:text-2xl text-xl font-semibold` w-full">
                    <p>Elevate Your Code—the Sky&apos;s the Limit.</p>
                    <h1 className="title-main font-bold sm:text-[30px] text-[20px] sm:pt-[20px] pt-[10px]">
                        {">"} We <Typed className="text-green-400 drop-shadow-[0_0_8px_rgba(150,255,150,0.5)]" strings={TYPED_KEYWORDS} typeSpeed={120} backSpeed={80} backDelay={2000} fadeOut={true} loop/> {"<"}
                    </h1>
                </div>

                {/* Currently requires a weird arbit. offset of -180 for this particular scroll */}
                <Link to="about" smooth={true} offset={40} duration={1500} className="z-20 mt-6 relative group w-[240px] active:scale-95 duration-150 border-[1px] hover:border-green-900 border-white rounded-2xl hover:outline-double hover:outline-[6px] active:outline-4 text-white text-lg title-main overflow-hidden">
                    <IoMdArrowRoundDown className="absolute w-full h-full group-hover:translate-y-0 -translate-y-[100%] duration-300 pointer-events-none bg-gradient-to-t from-[#16a34aec] to-[#ffffff91]"/>
                    <button className="flex w-full justify-center p-2 font-semibold text-shadow-lg shadow-black hover:bg-green-600 duration-300 hover:border-green-300 overflow-hidden">
                        <p className="text-center">I&apos;m Interested</p>
                    </button>
                </Link>
            </div>
            
            <div>
                {/* top        */} <div className="bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[15%]"></div>
                {/* bottom     */} <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full h-[20%]"></div>
                {/* cent-left  */} <div className="bg-gradient-to-l from-[#00000075] to-transparent absolute top-0 left-[25%] w-[25%] h-screen"></div>
                {/* cent-right */} <div className="bg-gradient-to-r from-[#00000075] to-transparent absolute top-0 right-[25%] w-[25%] h-screen"></div>
            </div>
        </div>
    )
}