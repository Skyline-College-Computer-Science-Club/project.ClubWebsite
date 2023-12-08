import React from 'react'
import Typed from 'react-typed'

import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

import backdrop from '../assets/backdrop.png'

const TYPED_KEYWORDS = ['Design','Explore','Build', 'Share Code', 'Collaborate', 'Nurture', '$ git commit']

export default function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <img className='absolute w-full h-[99vh] blur-sm object-cover' src={backdrop} alt='background banner'/>

            {/* INTRODUCTION */}
            <div className='absolute w-full h-full mx-auto flex flex-col justify-center'>
                            
                <h1 name='title' className='title-main text-2xl text-center sm:text-5xl text-shadow shadow-black font-bold text-[#e7e9ef]'>Skyline Computer Science Club</h1>
                {/* <h1 className = 'text-4xl sm:text-7xl font-bold text-[#8892b0]'>Hello World</h1> */}
                <div name='vignette-overlay'>
                    {/* top    */} <div className='bg-gradient-to-b from-black to-transparent' style={{position:'absolute', top:0, width:'100%', height:'25%'}}></div>
                    {/* bottom */} <div className='bg-gradient-to-t from-black to-transparent' style={{position:'absolute', bottom:0, width:'100%', height:'25%'}}></div>
                </div>

                <div name='subtitles' className='text-white text-center text-shadow shadow-black text-2xl py-4 w-full'>
                    Elevate Your Code—the Sky's the Limit.
                    <h1 className='text-orange-300 first-letter:source-code font-bold text-[30px] pt-[20px]'>
                        {'>'} We <Typed className = 'text-white-400' strings = {TYPED_KEYWORDS}  typeSpeed={120} backSpeed={60} loop/> {'<'}
                    </h1>
                </div>

                <div className='mx-auto'>
                    <Link to='tech' smooth={true} duration={500}>
                        <button className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4681f4] duration-300 hover:border-[#4681f4]'>
                            View Work 
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