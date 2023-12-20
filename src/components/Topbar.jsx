import { React, useState } from 'react'
import { Link } from 'react-scroll'

import { GoHome, GoQuestion, GoCodeOfConduct } from 'react-icons/go'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiTool } from 'react-icons/fi'

import { motion } from 'framer-motion'

import diagonalGlideOverlay from '../assets/home/diagonal_slowglide_overlay.gif'

import mascot from '../assets/mascot.png'

const ANNOUNCEMENT_TEXT = '🚧 Welcome! Mind the mess—our website is undergoing constant development. 👷'

export default function Topbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div>
            { /* Announcement Banner */ }
            <motion.div className='z-50 w-full h-[45px] bg-gradient-to-b from-[#33200d] to-[#000000] fixed flex justify-between items-center overflow-hidden' 
                initial={{opacity: 0, translateY: '-100%'}} animate={{opacity: 1, translateY: '0'}} transition={{duration: 1, ease: 'easeOut'}}>
                <p className='w-full font-semibold text-md text-center text-orange-200'>{ANNOUNCEMENT_TEXT}</p>
                <img className='absolute w-full opacity-5' src={diagonalGlideOverlay} alt='diagonalGlideOverlay'/>
            </motion.div>

            { /* Top Bar */ }
            <motion.div className='z-50 fixed w-full h-[80px] flex justify-between items-center bg-[#1d1d1d00] top-[45px] text-gray-300'
                initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1, ease: 'easeOut'}}>

                <div className='z-10 bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[45%]'></div>

                <img src={mascot} alt='Skyline CSC Logo (The Cat)' className='z-20 drop-shadow-lg ml-4 rounded-2xl hover:rotate-180' style={{width:'50px'}}/>

                {/* Navigation */}
                <div className='mr-4'>
                    <ul className='hidden md:flex'>
                        <li className='text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                            <GoHome className='my-auto mr-2'/>
                            <Link to='hero' smooth={true} duration={1000}>
                                Home
                            </Link>
                        </li>

                        <li className='text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                            <GoQuestion className='my-auto mr-2'/>
                            <Link to='about' smooth={true} duration={1000}>
                                About
                            </Link>
                        </li>
                        <li className='text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                            <FiTool className='my-auto mr-2'/>
                            Projects
                        </li>
                        <li className='text-white font-semibold flex active:scale-90 hover:scale-105 transition duration-300 ease-out'>
                            <GoCodeOfConduct className='my-auto mr-2'/>
                            Recruitment
                        </li>
                    </ul>
                </div>

                { /* Mobile Menu */ }
                { /* Mobile Menu */ }
                { /* Mobile Menu */ }

                <div onClick = {handleClick} className='md:hidden z-10'>
                    { !nav ? <FaBars/> : <FaTimes/> }
                </div>


                <div className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

                    <ul className=''>
                        <li className='py-6 text-4xl'>
                            <Link onClick={handleClick} to='hero' smooth='true' duration={300}>
                                Home
                            </Link>
                        </li>
                        <li className='py-6 text-4xl'>
                            <Link onClick={handleClick} to='about' smooth='true' duration={300}>
                                About
                            </Link>
                        </li>
                        <li className='py-6 text-4xl'>Projects</li>
                        <li className='py-6 text-4xl'>Recruitment</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}