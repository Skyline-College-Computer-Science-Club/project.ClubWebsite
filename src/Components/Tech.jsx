import { motion } from 'framer-motion'
import React from 'react'
import { FaJava } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiPython, SiLua, SiRust, SiCplusplus } from 'react-icons/si'

import conveyorTreading from '../assets/conveyor_treading.png'
import conveyorFront from '../assets/conveyor_front.png'

import CoderCat from '../assets/CoderCat.png'

const TECH_TEXT_CLASSES = 'title-main my-auto mx-10 font-semibold text-2xl'
const TECH_ICON_SHADOW = {filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))'}
const TECH_ICON_CLASSES = 'my-auto w-[4vw] h-full shadow-lg duration-200  hover:scale-110'

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
    return (
        <div name='tech' className='w-full h-[40vh] text-gray-300 overflow-hidden'>
            <h1 name='title' className='title-main text-2xl text-center sm:text-4xl text-shadow shadow-gray-700 font-bold text-[#e7e9ef]'>Explore Technologies</h1>

            <div className='relative'>
                {/* left   */} <div className='z-20 absolute bg-gradient-to-r from-black to-transparent left-0 h-full w-[28vw] pointer-events-none'></div>
                {/* right  */} <div className='z-20 absolute bg-gradient-to-l from-black to-transparent right-0 h-full w-[28vw] pointer-events-none'></div>

                {/* <div className='z-10 flex my-10 h-[10vw] bg-contain bg-center' style={{backgroundImage: `url(${conveyorTreading})`}}> */}
                <div className='z-10 flex my-10 h-[10vw] bg-repeat-x bg-bottom' style={{backgroundImage: `url(${conveyorFront})`}}>
                    <motion.div className='flex h-full' initial={{transform: 'translateX(-100%)'}} animate={{transform: `translateX(100%)`}} transition={{repeat: Infinity, ease: 'linear', duration: 45}}>
                        {Object.entries(TECHNOLOGIES).map(([technology_name]) => {
                            const className = `flex h-full mx-5`
                            return (
                                <div key={technology_name} className={className}>
                                    {TECHNOLOGIES[technology_name]}
                                    <h1 className={TECH_TEXT_CLASSES}>{technology_name}</h1>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}