import { motion } from 'framer-motion'
import React from 'react'
import { FaJava } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiPython, SiLua, SiRust, SiCplusplus } from 'react-icons/si'

import conveyorTreading from '../assets/conveyor_treading.png'
import conveyorFront from '../assets/conveyor_front.png'

import CoderCat from '../assets/CoderCat.png'

const TECH_TEXT_CLASSES = 'title-main my-auto mx-10 font-semibold text-2xl text-shadow shadow-black-900'
const TECH_ICON_CLASSES = 'my-auto w-[4vw] h-full'

const TECHNOLOGIES = {
    'JavaScript': (<SiJavascript color='rgb(255, 220, 50)' className={TECH_ICON_CLASSES}/>),
    'HTML': (<SiHtml5 color='rgb(255, 80, 50)' className={TECH_ICON_CLASSES}/>),
    'CSS': (<SiCss3 color='rgb(120, 120, 255)' className={TECH_ICON_CLASSES}/>),
    'TypeScript': (<SiTypescript color='#3178C6' className={TECH_ICON_CLASSES}/>),
    'Python': (<SiPython color='rgb(255, 230, 100)' className={TECH_ICON_CLASSES}/>),
    'Lua': (<SiLua color='rgb(80, 80, 255)' className={TECH_ICON_CLASSES}/>),
    'Rust': (<SiRust color='rgb(255, 150, 100)' className={TECH_ICON_CLASSES}/>),
    'C++': (<SiCplusplus color='rgb(50, 150, 240)' className={TECH_ICON_CLASSES}/>),
    'Java': (<FaJava color='rgb(255, 100, 100)' className={TECH_ICON_CLASSES}/>),
}

export default function Tech() {
  return (
    <div name='tech' className='w-full h-[40vh] text-gray-300 overflow-hidden'>
        <h1 name='title' className='title-main text-2xl text-center sm:text-4xl text-shadow shadow-black font-bold text-[#e7e9ef]'>Explore Technologies</h1>
 
        <div className='relative'>
            {/* left   */} <div className='z-20 absolute bg-gradient-to-r from-black to-transparent left-0 h-full w-[30vw]'></div>
            {/* right  */} <div className='z-20 absolute bg-gradient-to-l from-black to-transparent right-0 h-full w-[30vw]'></div>

            {/* <div className='z-10 flex my-10 h-[10vw] bg-contain bg-center' style={{backgroundImage: `url(${conveyorTreading})`}}> */}
            <div className='z-10 flex my-10 h-[10vw] bg-repeat-x bg-bottom' style={{backgroundImage: `url(${conveyorFront})`}}>
                <motion.div className='flex h-full' initial={{transform: 'translateX(-100%)'}} animate={{transform: `translateX(100%)`}} transition={{repeat: Infinity, ease: 'linear', duration: 25}}>
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