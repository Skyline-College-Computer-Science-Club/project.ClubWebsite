'use client'

import { useRef, useState } from 'react'
import { Element } from 'react-scroll'

import { motion, useInView } from 'framer-motion'
import { useSound } from 'use-sound'

import Image from 'next/image'

import { FcCollaboration, FcElectronics, FcIdea } from 'react-icons/fc'

const sfxClunk = '/assets/sound_fx/clunk.mp3'
const kitty = '/assets/mascot.gif'

// import experimentAnimation from '../assets/home/experiment.gif'

// TODO: Make cards scroll to relevant sectors of home page

export default function About(): React.ReactNode {
    const [playSfx_clunk] = useSound(sfxClunk)

    const ref = useRef(null)
    const isInView = useInView(ref)

    const [card1Animating, setCard1Animating] = useState(false)
    const [card2Animating, setCard2Animating] = useState(false)
    const [card3Animating, setCard3Animating] = useState(false)

    return (
        <div
            ref={ref}
            className='w-full h-full bg-gradient-to-b from-black to-[#0a0a0a] text-gray-300 py-[24vh] mt-40'
        >
            <Element name='about' />

            {/* <Element name="about"/> */}

            <div className='flex flex-col'>
                <Image
                    src={kitty}
                    className='z-10 hover:!scale-105 transition duration-300 ease-out mx-auto mb-6'
                    alt=''
                    width={100}
                    height={100}
                />

                <h1 className='title-main mx-auto text-2xl text-center sm:text-4xl font-extrabold text-white mb-10'>
                    <span>Join us in Exploring the </span>
                    <span className='text-yellow-300 animate-pulse drop-shadow-[0_0_10px_rgba(255,250,50,0.45)]'>
                        World of Computer Science
                    </span>
                </h1>

                <div className='flex flex-row overflow-x-scroll overflow-y-visible gap-10 py-[160px] px-[20px] my-[-160px] lg:justify-center no-scrollbar'>
                    {/* CARD: Discover Software */}
                    <motion.div
                        ref={ref}
                        onAnimationComplete={() => {
                            setCard1Animating(false)
                        }}
                        onAnimationStart={() => {
                            setCard1Animating(true)
                        }}
                        onMouseEnter={() => {
                            playSfx_clunk()
                        }}
                        onMouseDown={() => {
                            playSfx_clunk()
                        }}
                        onMouseUp={() => {
                            playSfx_clunk()
                        }}
                        initial={{ opacity: 0, transform: 'translateX(-30%)' }}
                        animate={
                            isInView
                                ? { opacity: 1, transform: 'translateX(0%)' }
                                : ''
                        }
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: 'easeOut',
                        }}
                        className={`${card1Animating && 'pointer-events-none'} hover:z-10 z-0 shrink-0 w-[350px] h-[430px] p-4 hover:!scale-[97%] active:!scale-100 hover:outline-[8px] outline-[3px] outline hover:outline-double outline-green-400 transition-all duration-300 ease-out bg-gradient-to-t rounded-3xl from-black via-[#073f1c] to-green-600 hover:drop-shadow-[0_15px_35px_rgba(50,255,100,0.35)] drop-shadow-[0_25px_25px_rgba(50,255,100,0.15)]`}
                    >
                        <motion.div
                            className='relative my-[8%]'
                            initial={{ transform: 'translateY(-4%)' }}
                            animate={{ transform: 'translateY(4%)' }}
                            transition={{
                                repeat: Infinity,
                                delay: 0.5,
                                repeatType: 'mirror',
                                type: 'tween',
                                ease: 'backInOut',
                                duration: 2,
                            }}
                        >
                            <FcElectronics
                                className='mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)]'
                                size={'50%'}
                            />
                        </motion.div>
                        <h1 className='title-main font-bold text-2xl mx-auto text-center mt-10 '>
                            Discover{' '}
                            <span className='text-green-300 drop-shadow-[0_0_10px_rgba(100,250,100,0.25)]'>
                                Technology
                            </span>
                        </h1>
                        <p className='text-sm mx-auto text-center py-2 px-4'>
                            {/* This is a description. */}
                            Expand your development toolkit by diving hands-on
                            through hundreds of diverse, specialized pieces of{' '}
                            <b>libraries, services, applications, frameworks</b>
                            , and other software. Also learn industry-leading
                            tools like <b>GitHub, Docker, Blender, Linux</b>,
                            and more!
                        </p>
                    </motion.div>

                    {/* CARD: Make Connections */}
                    <motion.div
                        ref={ref}
                        onAnimationComplete={() => {
                            setCard2Animating(false)
                        }}
                        onAnimationStart={() => {
                            setCard2Animating(true)
                        }}
                        onMouseEnter={() => {
                            playSfx_clunk()
                        }}
                        onMouseDown={() => {
                            playSfx_clunk()
                        }}
                        onMouseUp={() => {
                            playSfx_clunk()
                        }}
                        initial={{ opacity: 0, transform: 'translateY(30%)' }}
                        animate={
                            isInView
                                ? { opacity: 1, transform: 'translateY(0%)' }
                                : ''
                        }
                        transition={{
                            duration: 0.7,
                            delay: 0.6,
                            ease: 'easeOut',
                        }}
                        className={`${card2Animating && 'pointer-events-none'} hover:z-10 z-0 shrink-0 w-[350px] h-[430px] p-4 hover:!scale-[97%] active:!scale-100 hover:outline-[8px] outline-[3px] outline hover:outline-double outline-blue-400 transition-all duration-300 ease-out bg-gradient-to-t rounded-3xl from-black via-blue-950 to-blue-600 hover:drop-shadow-[0_15px_35px_rgba(70,120,250,0.35)] drop-shadow-[0_25px_25px_rgba(70,120,250,0.15)]`}
                    >
                        <motion.div
                            className='relative my-[8%]'
                            initial={{ transform: 'translateY(-4%)' }}
                            animate={{ transform: 'translateY(4%)' }}
                            transition={{
                                repeat: Infinity,
                                delay: 1,
                                repeatType: 'mirror',
                                type: 'tween',
                                ease: 'backInOut',
                                duration: 2,
                            }}
                        >
                            <FcCollaboration
                                className='mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)]'
                                size={'50%'}
                            />
                        </motion.div>
                        <h1 className='title-main font-bold text-2xl mx-auto text-center mt-10'>
                            Build{' '}
                            <span className='text-blue-300 drop-shadow-[0_0_10px_rgba(125,100,250,0.25)]'>
                                Connections
                            </span>
                        </h1>
                        <p className='text-sm mx-auto text-center py-2 px-4'>
                            In an always evolving, inter-connected world,{' '}
                            <b>networking is as important as ever!</b> Meet with
                            other fellow students and bring-out your inner{' '}
                            <b>interests and passions!</b> Meet your future{' '}
                            <b>industry colleagues</b> and explore computer
                            science together!
                        </p>
                    </motion.div>

                    {/* CARD: Gain Experience */}
                    <motion.div
                        ref={ref}
                        onAnimationComplete={() => {
                            setCard3Animating(false)
                        }}
                        onAnimationStart={() => {
                            setCard3Animating(true)
                        }}
                        onMouseEnter={() => {
                            playSfx_clunk()
                        }}
                        onMouseDown={() => {
                            playSfx_clunk()
                        }}
                        onMouseUp={() => {
                            playSfx_clunk()
                        }}
                        initial={{ opacity: 0, transform: 'translateX(30%)' }}
                        animate={
                            isInView
                                ? { opacity: 1, transform: 'translateX(0%)' }
                                : ''
                        }
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: 'easeOut',
                        }}
                        className={`${card3Animating && 'pointer-events-none'} hover:z-10 z-0 shrink-0 w-[350px] h-[430px] p-4 hover:!scale-[97%] active:!scale-100 hover:outline-[8px] outline-[3px] outline hover:outline-double outline-yellow-600 transition-all duration-300 ease-out bg-gradient-to-t rounded-3xl from-black via-yellow-950 to-yellow-600 hover:drop-shadow-[0_15px_35px_rgba(237,144,10,0.35)] drop-shadow-[0_25px_25px_rgba(237,144,10,0.15)]`}
                    >
                        <motion.div
                            className='relative my-[8%]'
                            initial={{ transform: 'translateY(-4%)' }}
                            animate={{ transform: 'translateY(4%)' }}
                            transition={{
                                repeat: Infinity,
                                delay: 1.5,
                                repeatType: 'mirror',
                                type: 'tween',
                                ease: 'backInOut',
                                duration: 2,
                            }}
                        >
                            <FcIdea
                                className='mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)]'
                                size={'50%'}
                            />
                        </motion.div>
                        {/* <img className="w-[calc(50%)] mx-auto p-4" src={experimentAnimation} alt="experiment"/> */}
                        <h1 className='title-main font-bold text-2xl mx-auto text-center mt-10'>
                            Gain{' '}
                            <span className='text-yellow-200 drop-shadow-[0_0_10px_rgba(255,250,100,0.25)]'>
                                Experience
                            </span>
                        </h1>
                        <p className='text-sm mx-auto text-center py-2 px-4'>
                            Get the opportunity to work across a diverse set of
                            projects in{' '}
                            <b>
                                game development, web UI/UX design, and
                                fullstack
                            </b>{' '}
                            development! Experience <b>real-world project</b>{' '}
                            workflows with fellow members! Or even propose and{' '}
                            <b>lead your own project!</b>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
