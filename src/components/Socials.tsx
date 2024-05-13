'use client'

import React from 'react'
import { Link } from 'react-scroll'

import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

// import {BsFillPersonLinesFill} from 'react-icons/bs'

export default function Socials(): React.ReactNode {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7289d9]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            target='_blank'
                            rel='noreferrer'
                            href='https://discord.gg/XM6jnkn4'
                        >
                            Discord <FaDiscord size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E4405F]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.instagram.com/skylinecsc/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='
                        >
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>

                    {/* <Link to='contact' smooth='true' duration={500}>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2ba288]'>
                            <a
                                className='flex justify-between items-center w-full text-gray-300'
                                href='Contact'
                            >
                                Message <HiOutlineMail size={30} />
                            </a>
                        </li>
                    </Link> */}
                </ul>
            </div>
        </div>
    )
}
