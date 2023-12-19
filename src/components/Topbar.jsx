import { React, useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

import mascot from '../assets/mascot.png'

const ANNOUNCE_TEXT = '🚧 Welcome! Mind the mess—our website is undergoing constant development. 👷'

export default function Topbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div>
            { /* Announcement banner */ }
            <div className='z-50 bg-gradient-to-b from-[#33200d] to-[#000000] fixed font-semibold text-md w-full h-[45px] flex justify-between items-center px-4'>
                <p className='w-full text-center text-orange-200'>{ANNOUNCE_TEXT}</p>
            </div>

            { /* Top bar */ }
            <div className='z-50 fixed w-full h-[80px] flex justify-between items-center bg-[#1d1d1d00] top-[45px] text-gray-300'>

                <div className='z-10 bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[45%]'></div>

                <img src={mascot} alt="Skyline CSC Logo (The Cat)" className='z-20 drop-shadow-lg ml-4 rounded-2xl hover:rotate-180' style={{width:'50px'}}/>

                <div className='mr-4'>
                    <ul className='hidden md:flex'>
                        <li className='text-white font-semibold'>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                        </li>

                        <li className='text-white font-semibold'>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                        </li>
                        <li className='text-white font-semibold'>Projects</li>
                        <li className='text-white font-semibold'>Recruitment</li>
                    </ul>
                </div>


                {/*Mobile Menu*/}
                <div onClick = {handleClick} className='md:hidden z-10'>
                    { !nav ? <FaBars/> : <FaTimes/> }
                </div>


                {/* Mobile Menu */}
                <div className={ !nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

                    <ul className=''>
                        <li className='py-6 text-4xl'>
                            <Link onClick={handleClick} to='home' smooth='true' duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className='py-6 text-4xl'>
                            <Link onClick={handleClick} to='about' smooth='true' duration={500}>
                                About
                            </Link>
                        </li>
                        <li className='py-6 text-4xl'>Projects</li>
                        <li className='py-6 text-4xl'>Recruitment</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}