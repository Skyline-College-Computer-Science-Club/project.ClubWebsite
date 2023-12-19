import React from 'react'
import { useSound } from 'use-sound'

import { SiLinktree, SiGithub, SiInstagram } from 'react-icons/si'
import { FaNetworkWired } from 'react-icons/fa'

const { leadership } = require('../dispositions/leadership.js')
// console.log(leadership)

export default function Leadership() {
    
    return (
        <div name='leadership' className='w-full h-screen my-20 bg-gradient-to-b from-black via-[#0e2402] to-black text-gray-300'>

            <div className='flex flex-col justify-center items-center w-full h-full'>

                <h1 className='title-main mx-auto my-4 text-3xl font-semibold inline border-b-2 border-[#86f446]'>Our Club Officers</h1>
                <div className='grid grid-cols-4 gap-4 my-4 mx-[20%]'>
                    {
                        Object.keys(leadership).map((leaderName) => {
                            const leaderDetails = leadership[leaderName]

                            console.log(leaderName)
                            return (
                                <div className='hover:z-20 relative group hover:rounded-b-none hover:scale-105 transition duration-300 ease-out rounded-xl bg-gradient-to-t from-[#040404] via-green-950 to-green-950'>
                                    
                                    <img className='mx-auto rounded-xl aspect-square hover:scale-105 transition duration-300 ease-out' alt='mascot' src={leaderDetails.imgSrc}/>
                                    
                                    <div className='rounded-xl p-4 group-hover:pb-0'>
                                        <h1 className='title-main text-xl font-semibold text-center'>{leaderName}</h1>
                                        <h2 className='text-lg font-semibold text-center'>{leaderDetails.role}</h2>
                                    </div>

                                    <div className='z-10 absolute group-hover:flex justify-center hidden w-[100%] rounded-b-xl border-t-white bg-gradient-to-b from-[#040a04] to-black gap-2 px-2 pb-2'>
                                        {leaderDetails.linktree ? <a className='active:scale-90 active:opacity-90' href={leaderDetails.linktree} target='_blank' rel='noreferrer'><SiLinktree size={'3vh'} className='h-10'/></a> : <></>}
                                        {leaderDetails.github ? <a className='active:scale-90 active:opacity-90' href={leaderDetails.github} target='_blank' rel='noreferrer'><SiGithub size={'3vh'} className='h-10'/></a> : <></>}
                                        {leaderDetails.instagram ? <a className='active:scale-90 active:opacity-90' href={leaderDetails.instagram} target='_blank' rel='noreferrer'><SiInstagram size={'3vh'} className='h-10'/></a> : <></>}
                                        {leaderDetails.website ? <a className='active:scale-90 active:opacity-90' href={leaderDetails.website} target='_blank' rel='noreferrer'><FaNetworkWired size={'3vh'} className='h-10'/></a> : <></>}
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}