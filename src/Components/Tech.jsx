import { motion } from 'framer-motion'
import React from 'react'
import { FaJava } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiPython, SiLua, SiRust, SiCplusplus } from 'react-icons/si'

import conveyorTreading from '../assets/conveyor_treading.png'
import CoderCat from '../assets/CoderCat.png'

const TECH_TEXT_CLASSES = 'title-main my-auto mx-10 font-semibold text-2xl'
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

const Tech = () => {
  return (
    <div name='tech' className='w-full h-[40vh] bg-[#0a192f] text-gray-300 overflow-hidden'>
        <h1 name='title' className='title-main text-2xl text-center sm:text-4xl text-shadow shadow-black font-bold text-[#e7e9ef]'>Explore Technologies</h1>
 
        

        <div className='flex my-10 h-[20vh] bg-contain bg-center' style={{backgroundImage: `url(${conveyorTreading})`}}>
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
  )
}

export default Tech     