import { motion } from 'framer-motion'

import React from 'react'
import Typed from 'react-typed'
import useSound from 'use-sound'

import { FaJava } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiPython, SiLua, SiRust, SiCplusplus } from 'react-icons/si'

import sfxClick from '../assets/sound_fx/click.mp3'
import conveyorFront from '../assets/home/conveyor_front.png'
import kittyAstro from '../assets/home/kitty_astro.png'

const TECH_TEXT_CLASSES = 'title-main my-auto mx-10 font-semibold text-2xl'
const TECH_ICON_SHADOW = { filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))' }
const TECH_ICON_CLASSES = 'my-auto w-[4vw] h-full'

const TECHNOLOGIES = {
    'JavaScript': (<SiJavascript color='rgb(255, 220, 50)' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
    'HTML': (<SiHtml5 color='rgb(255, 80, 50)' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
    'CSS': (<SiCss3 color='rgb(120, 120, 255)' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
    'TypeScript': (<SiTypescript color='#3178C6' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
    'Python': (<SiPython color='rgb(255, 230, 100)' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
    'Lua': (<SiLua color='#3178C6' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
    'Rust': (<SiRust color='rgb(255, 150, 100)' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
    'C++': (<SiCplusplus color='rgb(50, 150, 240)' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
    'Java': (<FaJava color='rgb(255, 100, 100)' className={TECH_ICON_CLASSES} style={TECH_ICON_SHADOW}/>),
}

export default function Tech() {

    const [play_click] = useSound(sfxClick)

    return (
        <div name='tech' className='w-full h-full mt-60 text-gray-300 overflow-hidden'>

            <motion.img width={'6.5%'} src={kittyAstro} className='mx-auto my-10 hover:scale-105' initial={{transform: 'translateY(-10%)'}}  animate={{transform: `translateY(10%)`}} transition={{repeat: Infinity, repeatType: 'mirror', type: 'tween', ease: 'linear', duration: 2 }}/>
            
            {/* optional shadow for title (looks fine): drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] */}
            <h1 className='title-main mx-auto text-2xl text-center sm:text-4xl font-extrabold text-[#e7e9ef]'> 
                <span className='text-shadow shadow-gray-700'>Join us in Exploring</span> <Typed name='title' strings={['Technologies', 'Libraries', 'Frameworks', 'Software']} typeSpeed={50} backSpeed={75} backDelay={5000} loop className='bg-gradient-to-t from-yellow-300 to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(50,255,100,0.5)]'></Typed>
            </h1>

            {/* old test */}
            {/* <h1 className='my-10 title-main text-2xl bg-gradient-to-t from-white to-green-400 bg-clip-text text-transparent inline-block w-full  text-center sm:text-4xl font-bold'>Sample Text</h1> */}

            <div className='relative'>
                {/* left   */} <div className='z-10 absolute bg-gradient-to-r from-black to-transparent left-0 h-full w-[28vw] pointer-events-none'></div>
                {/* right  */} <div className='z-10 absolute bg-gradient-to-l from-black to-transparent right-0 h-full w-[28vw] pointer-events-none'></div>

                {/* <div className='z-10 flex my-10 h-[10vw] bg-contain bg-center' style={{backgroundImage: `url(${conveyorTreading})`}}> */}
                <div className='flex my-10 h-[18vh] bg-repeat-x bg-bottom' style={{backgroundImage: `url(${conveyorFront})`}}>
                    <motion.div className='flex h-full' initial={{transform: 'translateX(-100%)'}} animate={{transform: `translateX(100vw)`}} transition={{repeat: Infinity, type: 'tween', ease: 'linear', duration: 40 }}>
                        {Object.entries(TECHNOLOGIES).map(([technology_name]) => {
                            return (
                                <div onMouseEnter={play_click} key={technology_name} className='flex h-full mx-5 hover:scale-110 duration-200'>
                                    {TECHNOLOGIES[technology_name]}
                                    <Typed strings={[technology_name]} className={TECH_TEXT_CLASSES}></Typed>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}