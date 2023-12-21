import { React, useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useSound } from 'use-sound'

import { SiLinktree, SiGithub, SiInstagram, SiDiscord, SiLinkedin } from 'react-icons/si'
import { FaNetworkWired, FaQuoteLeft } from 'react-icons/fa'

import sfxClunk from '../assets/sound_fx/clunk.mp3'
import sfxHoverThunk from '../assets/sound_fx/hover_thunk.mp3'

const { leadership } = require('../dispositions/leadership.js')


function LeaderCard(props) {

    const [playClunk] = useSound(sfxClunk)
    const [playHoverThunk] = useSound(sfxHoverThunk)
    const [displayQuote, setDisplayQuote] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    
    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    // }, [isInView])

    const leaderName = props.leaderName
    const leaderDetails = leadership[leaderName]
    // console.log(leaderDetails)

    // <motion.div ref={ref} initial={{opacity: 0, transform: (props.index < COLUMNS ? 'translateX(100%)' : 'translateX(-100%)')}} animate={isInView ? {opacity: 1, transform: 'translateX(0%)'} : ''} transition={{duration: 1, delay: 0.2 + (props.index / 9), ease: 'easeOut'}} className='relative group opacity-0 hover:z-20 hover:rounded-b-none hover:!scale-105 transition duration-300 ease-out select-none rounded-xl bg-gradient-to-t from-[#040404] via-green-950 to-green-950' key={leaderName} onMouseEnter={playHoverThunk}>
    
    return (
        <motion.div ref={ref} initial={{opacity: 0, transform: 'translateX(100%)'}} animate={isInView ? {opacity: 1, transform: 'translateX(0%)'} : ''} transition={{duration: 1, delay: 0.2 + (props.startOffset / 8), ease: 'easeOut'}} className='relative group opacity-0 hover:z-20 hover:rounded-b-none hover:!scale-105 transition duration-300 ease-out select-none rounded-xl bg-gradient-to-t from-[#040404] via-green-950 to-green-950' key={leaderName} onMouseEnter={playHoverThunk}>
            
            {/* Leader's quote, other details */}
            <div className='hover:scale-105 active:scale-95 transition duration-300 ease-out' onMouseDown={() => {
                    setDisplayQuote(!displayQuote)
                    playClunk()
                }} onMouseUp={playClunk}>
                    
                <motion.div animate={displayQuote ? {opacity: 1} : {opacity: 0}} className='z-10 absolute outline-4 outline-double opacity-0 outline-black bg-gradient-to-b from-[#040a0470] to-black rounded-xl drop-shadow-2xl'>
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

            {/* Leader socials and other links, dynamically generated */}
            <div onMouseDown={playClunk} onMouseUp={playClunk} className='z-30 absolute hidden group-hover:flex justify-center w-full rounded-b-xl bg-gradient-to-b from-[#040a04] to-black gap-2 px-2 pb-2'>
                {leaderDetails.linktree ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out' href={leaderDetails.linktree} target='_blank' rel='noreferrer'><SiLinktree size={'3vh'} className='h-10'/></a> : <></>}
                {leaderDetails.github ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'  href={leaderDetails.github} target='_blank' rel='noreferrer'><SiGithub size={'3vh'} className='h-10'/></a> : <></>}
                {leaderDetails.instagram ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out' href={leaderDetails.instagram} target='_blank' rel='noreferrer'><SiInstagram size={'3vh'} className='h-10'/></a> : <></>}
                {leaderDetails.discord ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out' href={leaderDetails.discord} target='_blank' rel='noreferrer'><SiDiscord size={'3vh'} className='h-10'/></a> : <></>}
                {leaderDetails.linkedin ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out' href={leaderDetails.linkedin} target='_blank' rel='noreferrer'><SiLinkedin size={'3vh'} className='h-10'/></a> : <></>}
                {leaderDetails.website ? <a className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out' href={leaderDetails.website} target='_blank' rel='noreferrer'><FaNetworkWired size={'3vh'} className='h-10'/></a> : <></>}
            </div>

        </motion.div>
    )
}

export default function Leadership() {
    return (
        <div name='leadership' className='w-full h-full py-80 bg-gradient-to-b from-slate-950 via-[#0e2402] to-black text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <h1 className='title-main mx-auto my-4 text-3xl font-semibold inline border-b-2 border-[#86f446] drop-shadow-[0_0_60px_rgba(50,255,50,1)]'>Our Club Leadership</h1>
                <div className='grid grid-cols-4 gap-4 my-4 mx-[20%]'>
                    {Object.keys(leadership).map((leaderName, index) => (<LeaderCard startOffset={index} leaderName={leaderName}/>))}
                </div>
            </div>
        </div>
    )
}