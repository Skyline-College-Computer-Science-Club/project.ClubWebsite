import React from 'react'
import Typed from 'react-typed'

import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

import backdrop from '../assets/home/hero_back.png'
import heroOverlay from '../assets/home/hero_overlay_alt.gif'

// TODO: Move to a disposition file
const TYPED_KEYWORDS = ['Design', 'Pioneer', 'Optimize', 'Build', 'Compile', '3D-model', 'Deploy', 'Problem-Solve', 'Interpret', 'Learn', 'Collaborate', 'Develop', 'Delegate', '$ git commit']

export default function Hero() {
    return (
        <div name='hero' className='w-full h-screen bg-[#0a192f]'>
            <img className='absolute w-full h-[99vh] blur-[0px] object-cover' src={backdrop} alt='background banner'/>

            {/* INTRODUCTION */}
            <div className='absolute w-full h-full mx-auto flex flex-col justify-center'>
                
                <img src={heroOverlay} className='opacity-30 absolute top-0 w-full h-full' alt='overlay'/>
                
                <div name='vignette-overlay'>
                    {/* top        */} <div className='bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[15%]'></div>
                    {/* bottom     */} <div className='bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full h-[15%]'></div>
                    {/* cent-left  */} <div className='bg-gradient-to-l from-[#00000075] to-transparent absolute top-0 left-[25%] w-[25%] h-full'></div>
                    {/* cent-right */} <div className='bg-gradient-to-r from-[#00000075] to-transparent absolute top-0 right-[25%] w-[25%] h-full'></div>
                </div>

                <h1 name='title' className='z-20 title-main text-2xl text-center sm:text-5xl text-shadow shadow-black font-bold text-[#e7e9ef]'>Skyline Computer Science Club</h1>

                <div name='subtitles' className='z-20 text-white text-center text-shadow shadow-black text-2xl py-4 w-full'>
                    Elevate Your Code—the Sky's the Limit.
                    <h1 className='first-letter:source-code font-bold text-[30px] pt-[20px]'>
                        {'>'} We <Typed className='text-green-400' strings={TYPED_KEYWORDS} typeSpeed={120} backSpeed={80} backDelay={2000} fadeOut={true} loop/> {'<'}
                    </h1>
                </div>

                <div className='z-20 mx-auto'>
                    <Link to='tech' smooth={true} duration={500}>
                        <button className='text-white font-semibold group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 duration-300 hover:border-green-300'>
                            See What We're About
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowRight className='ml-3'/>
                            </span>
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}