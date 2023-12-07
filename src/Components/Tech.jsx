import { motion } from 'framer-motion'
import React from 'react'
import { FaJava } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3, SiTypescript, SiPython, SiLua, SiRust, SiCplusplus } from 'react-icons/si'

import CoderCat from '../assets/CoderCat.png'

const TECHNOLOGY_CLASSSET = 'title-main my-auto mx-10 font-semibold text-2xl'

const TECHNOLOGIES = {
    'JavaScript': (<SiJavascript size={'100%'} color='rgb(255, 220, 50)'/>),
    'HTML': (<SiHtml5 size={'100%'} color='rgb(255, 80, 50)'/>),
    'CSS': (<SiCss3 size={'100%'} color='rgb(120, 120, 255)'/>),
    'TypeScript': (<SiTypescript size={'100%'} color='rgb(80, 120, 255)'/>),
    'Python': (<SiPython size={'100%'} color='rgb(255, 230, 100)'/>),
    'Lua': (<SiLua size={'100%'} color='rgb(80, 80, 255)'/>),
    'Rust': (<SiRust size={'100%'} color='rgb(255, 150, 100)'/>),
    'C++': (<SiCplusplus size={'100%'} color='rgb(50, 150, 240)'/>),
    'Java': (<FaJava size={'100%'} color='rgb(255, 100, 100)'/>),
}

const Tech = () => {
  return (
    <div name='tech' className='w-full h-[40vh] bg-[#0a192f] text-gray-300 overflow-hidden'>
        <h1 name='title' className='title-main text-2xl text-center sm:text-4xl text-shadow shadow-black font-bold text-[#e7e9ef]'>Explore Technologies</h1>

        <div className='my-10 w-[500vw] overflow-hidden  '>
            <motion.div className='flex' animate={{transform: `translate(100vw)`}} initial={{transform: 'translate(-160vw)'}} transition={{repeat: Infinity, ease: 'linear', duration: 25}}>
                {Object.entries(TECHNOLOGIES).map(([technology_name]) => {
                    const className = `flex h-[10vh] mx-5`
                    return (
                        <div key={technology_name} className={className}>
                            {TECHNOLOGIES[technology_name]}
                            <h1 className={TECHNOLOGY_CLASSSET}>{technology_name}</h1>
                        </div>
                    )
                })}
            </motion.div>
            <motion.div className='flex my-8' animate={{transform: `translate(-160vw)`}} initial={{transform: 'translate(100vw)'}} transition={{repeat: Infinity, ease: 'linear', duration: 25, delay: 5}}>
                {Object.entries(TECHNOLOGIES).map(([technology_name]) => {
                    const className = `flex h-[10vh] mx-5`
                    return (
                        <div key={technology_name} className={className}>
                            {TECHNOLOGIES[technology_name]}
                            <h1 className={TECHNOLOGY_CLASSSET}>{technology_name}</h1>
                        </div>
                    )
                })}
            </motion.div>
             
        </div>
    </div>
  )
}

export default Tech     