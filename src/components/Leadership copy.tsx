'use client'

import React, { useRef, useState } from 'react'
import { Element } from 'react-scroll'

import Image from 'next/image'

import { motion, useInView } from 'framer-motion'
import { useSound } from 'use-sound'

import {
    SiLinktree,
    SiGithub,
    SiInstagram,
    SiDiscord,
    SiLinkedin,
} from 'react-icons/si'
import { FaNetworkWired, FaQuoteLeft } from 'react-icons/fa'

const sfx_clunk = '/assets/sound_fx/clunk.mp3'
const sfx_hoverThunk = '/assets/sound_fx/muffled_hover_thunk.mp3'
const sfx_discorda = '/assets/sound_fx/discorda.mp3'

const { leadership, FALLBACK_QUOTE } = require('../dispositions/leadership.tsx')

interface props_LeaderCard {
    leaderName: string
    index: number
}

const LeaderCard: React.FC<props_LeaderCard> = ({ leaderName, index }) => {
    const [playSfx_clunk] = useSound(sfx_clunk)
    const [playSfx_hoverThunk] = useSound(sfx_hoverThunk)
    const [playSfx_discorda] = useSound(sfx_discorda)

    const [displayQuote, setDisplayQuote] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const leaderDetails = leadership[leaderName]

    return (
        <motion.div
            ref={ref}
            onAnimationStart={() => {
                setIsAnimating(true)
            }}
            onAnimationComplete={() => {
                setIsAnimating(false)
            }}
            onMouseEnter={() => playSfx_hoverThunk()}
            initial={{ opacity: 0, transform: 'translateX(50%)' }}
            animate={
                isInView ? { opacity: 1, transform: 'translateX(0%)' } : ''
            }
            transition={{ duration: 0, delay: 0, ease: 'easeOut' }}
            className={`${isAnimating && 'pointer-events-none'} hover:z-20 outline-2 outline-green-950 outline relative group opacity-0 hover:rounded-b-none hover:!scale-105 transition duration-300 ease-out select-none rounded-xl bg-gradient-to-t from-[#040404] via-lightpall to-medpall`}
            key={leaderName}
        >
            {/* Leader"s quote, other details */}
            <div
                className='hover:scale-105 active:scale-95 transition duration-300 ease-out'
                onMouseDown={() => {
                    setDisplayQuote(!displayQuote)
                    playSfx_clunk()
                }}
                onMouseUp={() => playSfx_clunk()}
            >
                <motion.div
                    animate={displayQuote ? { opacity: 1 } : { opacity: 0 }}
                    className='z-10 absolute w-full outline-4 active:outline-8 active:outline-neutral-100 duration-200 outline-double opacity-0 outline-black bg-gradient-to-b from-[#5a512970] to-black rounded-xl drop-shadow-2xl'
                >
                    <motion.div
                        className='absolute'
                        initial={{ transform: 'translateY(-8%)' }}
                        animate={{ transform: 'translateY(8%)' }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'linear',
                            duration: 1.5,
                        }}
                    >
                        <FaQuoteLeft size={32} className='m-4' />
                    </motion.div>

                    <div className='aspect-square w-full flex items-center px-10 font-semibold text-shadow-lg shadow-black'>
                        {/* whitespace-pre-line enables usage of specifically \n */}
                        <div className='text-center whitespace-pre-line'>
                            {leaderDetails.quote
                                ? leaderDetails.quote
                                : FALLBACK_QUOTE}
                        </div>
                    </div>
                </motion.div>

                <Image
                    width={1024}
                    height={1024}
                    className='rounded-xl aspect-square'
                    alt='mascot'
                    src={leaderDetails.imgSrc}
                />
            </div>

            <div className='rounded-xl p-4 group-hover:pb-0'>
                <h1 className='title-main text-xl font-semibold text-center'>
                    {leaderName}
                </h1>
                <h2 className='text-lg font-semibold text-center'>
                    {leaderDetails.role}
                </h2>
            </div>

            {/* Leader socials and other links, dynamically generated */}
            <div
                onMouseDown={() => playSfx_clunk()}
                onMouseUp={() => playSfx_clunk()}
                className='z-10 absolute hidden group-hover:flex border-b-4 border-green-700 justify-center w-full rounded-b-xl bg-gradient-to-b from-[#040a04] to-black gap-2 px-2 pb-2'
            >
                {leaderDetails.linktree ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={leaderDetails.linktree}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiLinktree size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {leaderDetails.github ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={leaderDetails.github}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiGithub size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {leaderDetails.instagram ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={leaderDetails.instagram}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiInstagram size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {leaderDetails.discord ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={leaderDetails.discord}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiDiscord
                            onMouseUp={() => playSfx_discorda()}
                            size={'3vh'}
                            className='h-10'
                        />
                    </a>
                ) : (
                    <></>
                )}
                {leaderDetails.linkedin ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={leaderDetails.linkedin}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <SiLinkedin size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
                {leaderDetails.website ? (
                    <a
                        className='hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out'
                        href={leaderDetails.website}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaNetworkWired size={'3vh'} className='h-10' />
                    </a>
                ) : (
                    <></>
                )}
            </div>
        </motion.div>
    )
}

export default function Leadership(): React.ReactNode {
    return (
        <div>
            <div className='w-full h-[25vh] bg-gradient-to-b from-black to-darkpall'></div>
            <div className='w-full h-full py-80 text-gray-300 bg-darkpall'>
                <Element name='leadership' />
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <h1 className='title-main mx-auto my-4 text-4xl font-semibold border-b-2 border-[#86f446] drop-shadow-[0_0_60px_rgba(50,255,50,1)]'>
                        Our Club Leadership
                    </h1>
                    <div className='grid grid-cols-4 gap-6 my-4 mx-[20%]'>
                        {Object.keys(leadership).map((leaderName, index) => (
                            <LeaderCard
                                key={index}
                                index={index}
                                leaderName={leaderName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
