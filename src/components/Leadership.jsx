import { React, useState } from 'react'
import { useSound } from 'use-sound'
import { motion } from 'framer-motion'

import { SiLinktree, SiGithub, SiInstagram } from 'react-icons/si'
import { FaNetworkWired, FaQuoteLeft } from 'react-icons/fa'

import sfxClunk from '../assets/sound_fx/clunk.mp3'
import sfxHoverThunk from '../assets/sound_fx/hover_thunk.mp3'

const { leadership } = require('../dispositions/leadership.js')
// console.log(leadership)

const quoteVariants = {
    'display': { opacity: 1, transform: 'translateY(0)'},
    'hidden': { opacity: 0, transform: 'translateY(100%)'}
}

function LeaderCard(props) {

    const [playClunk] = useSound(sfxClunk)
    const [playHoverThunk] = useSound(sfxHoverThunk)
    const [displayQuote, setDisplayQuote] = useState(false)

    const leaderName = props.leaderName
    const leaderDetails = leadership[leaderName]
    console.log(leaderDetails)
    
    return (
        <div className='relative group hover:z-20 hover:rounded-b-none hover:scale-105 transition duration-300 ease-out select-none rounded-xl bg-gradient-to-t from-[#040404] via-green-950 to-green-950' key={leaderName} onMouseEnter={playHoverThunk}>
            
            {/* Leader's quote, programming langs, other details */}
            <div className='hover:scale-105 active:scale-95 transition duration-300 ease-out' onMouseDown={() => {
                    setDisplayQuote(!displayQuote)
                    playClunk()
                }} onMouseUp={playClunk}>
                    
                <motion.div animate={displayQuote ? 'display' : 'closed'} variants={quoteVariants} className='z-10 absolute outline-4 outline-double opacity-0 outline-black bg-gradient-to-b from-[#040a0470] to-black rounded-xl drop-shadow-2xl'>
                    <motion.div className='absolute' initial={{transform: 'translateY(-8%)'}} animate={{transform: 'translateY(8%)'}} transition={{repeat: Infinity, repeatType: 'mirror', type: 'tween', ease: 'linear', duration: 2 }}>
                        <FaQuoteLeft size={32} className='m-4'/>
                    </motion.div>

                    <div className='aspect-square w-full flex items-center px-10 font-semibold text-shadow-lg shadow-black'>
                        {/* whitespace-pre-wrap enables usage of \n */}
                        <p className='text-center whitespace-pre-wrap'>{leaderDetails.quote || 'That was no message. This is a message.\n- Makarov'}</p>
                    </div>
                </motion.div> 

                <img className='rounded-xl aspect-square' alt='mascot' src={leaderDetails.imgSrc}/>
            </div>

            <div className='rounded-xl p-4 group-hover:pb-0'>
                <h1 className='title-main text-xl font-semibold text-center'>{leaderName}</h1>
                <h2 className='text-lg font-semibold text-center'>{leaderDetails.role}</h2>
            </div>

            {/* Leader socials and other links */}
            <div onMouseDown={playClunk} onMouseUp={playClunk} className='z-30 absolute hidden group-hover:flex justify-center w-full rounded-b-xl border-t-white bg-gradient-to-b from-[#040a04] to-black gap-2 px-2 pb-2'>
                {leaderDetails.linktree ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out' href={leaderDetails.linktree} target='_blank' rel='noreferrer'><SiLinktree size={'3vh'} className='h-10'/></a> : <></>}
                {leaderDetails.github ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'  href={leaderDetails.github} target='_blank' rel='noreferrer'><SiGithub size={'3vh'} className='h-10'/></a> : <></>}
                {leaderDetails.instagram ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out' href={leaderDetails.instagram} target='_blank' rel='noreferrer'><SiInstagram size={'3vh'} className='h-10'/></a> : <></>}
                {leaderDetails.website ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out' href={leaderDetails.website} target='_blank' rel='noreferrer'><FaNetworkWired size={'3vh'} className='h-10'/></a> : <></>}
            </div>

        </div>
    )
}

export default function Leadership() {
    return (
        <div name='leadership' className='w-full h-full my-80 bg-gradient-to-b from-black via-[#0e2402] to-black text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <h1 className='title-main mx-auto my-4 text-3xl font-semibold inline border-b-2 border-[#86f446] drop-shadow-[0_0_60px_rgba(50,255,50,1)]'>Our Club Leadership</h1>
                <div className='grid grid-cols-4 gap-4 my-4 mx-[20%]'>
                    {Object.keys(leadership).map((leaderName) => (<LeaderCard leaderName={leaderName}/>))}
                </div>
            </div>
        </div>
    )
}