import React from 'react'
import CoderCat from '../assets/CoderCat.png'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-scroll'
import { useState } from 'react'

const ANNOUNCE_TEXT = '🚧 Mind the mess! Our site is undergoing constant development. 🛠️'

export default function Topbar() {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
    return (

    <div>
        <div className='z-10 bg-gradient-to-b from-[#aa5b00] to-[rgba(87,35,0,0.1)] bg-opacity-25 fixed font-semibold text-md w-full h-[45px] flex justify-between items-center px-4'>
          <p className='z-1 w-full text-center text-white'>{ANNOUNCE_TEXT}</p>
      </div>

      { /* Announcement banner */ }
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1d1d1d00] top-[45px] text-gray-300'>

        <div>
            <img src={CoderCat} alt="Skyline CSC Logo (The Cat)" className='rounded-2xl' style={{width:'50px'}}/>
        </div>

        <div>
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

            <ul  className=''>
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