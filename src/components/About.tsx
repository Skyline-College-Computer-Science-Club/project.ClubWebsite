'use client'

import { useRef, useState } from 'react'
import { Element } from 'react-scroll'

import { motion, useInView } from 'framer-motion'
import { useSound } from 'use-sound'

import { FcCollaboration, FcElectronics, FcIdea } from 'react-icons/fc'

const sfxClunk = '/assets/sound_fx/clunk.mp3'

// import experimentAnimation from '../assets/home/experiment.gif'

// TODO: Make cards scroll to relevant sectors of home page

export default function About() {
  const [playSfx_clunk] = useSound(sfxClunk)

  const ref = useRef(null)
  const isInView = useInView(ref)

  const [card1Animating, setCard1Animating] = useState(false)
  const [card2Animating, setCard2Animating] = useState(false)
  const [card3Animating, setCard3Animating] = useState(false)

  return (
    <div
      ref={ref}
      className='w-full h-full bg-gradient-to-b from-black to-slate-950 text-gray-300 py-[24vh] mt-40'
    >
      <Element name='about' />

      {/* <Element name='about'/> */}

      <div className='flex flex-col mx-[20%]'>
        <h1 className='title-main text-4xl mx-auto my-4 font-semibold text-center'>
          Explore the World of Computer Science
        </h1>

        <div className='flex gap-8 my-4 justify-center'>
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
              isInView ? { opacity: 1, transform: 'translateX(0%)' } : ''
            }
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className={`${card1Animating && 'pointer-events-none'} hover:z-10 z-0 w-[18vw] h-[24vw] p-4 hover:!scale-110 active:!scale-100 hover:border-double hover:border-2 hover:border-green-400 border-white transition duration-300 ease-out bg-gradient-to-t rounded-3xl from-black via-[#073f1c] to-green-600 hover:drop-shadow-[0_15px_35px_rgba(50,255,100,0.35)] drop-shadow-[0_25px_25px_rgba(50,255,100,0.15)]`}
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
            <h1 className='title-main font-bold text-2xl mx-auto text-center mt-10'>
              Discover <span className='text-green-300'>Tech</span>
            </h1>
            <p className='text-md mx-auto text-center py-2 px-6'>
              {/* This is a description. */}
              Expand your development toolkit by diving hands-on through
              hundreds of diverse, specialized pieces of libraries, services,
              applications, frameworks, and other software.
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
              isInView ? { opacity: 1, transform: 'translateY(0%)' } : ''
            }
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className={`${card2Animating && 'pointer-events-none'} hover:z-10 z-0 w-[18vw] h-[24vw] p-4 hover:!scale-110 active:!scale-100 hover:border-double hover:border-2 hover:border-blue-400 border-white transition duration-300 ease-out bg-gradient-to-t rounded-3xl from-black via-blue-950 to-blue-600 hover:drop-shadow-[0_15px_35px_rgba(70,120,250,0.35)] drop-shadow-[0_25px_25px_rgba(70,120,250,0.15)]`}
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
              Make <span className='text-blue-300'>Connections</span>
            </h1>
            <p className='text-md mx-auto text-center py-2 px-6'>
              This is also a description.
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
              isInView ? { opacity: 1, transform: 'translateX(0%)' } : ''
            }
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className={`${card3Animating && 'pointer-events-none'} hover:z-10 z-0 w-[18vw] h-[24vw] p-4 hover:!scale-110 active:!scale-100 hover:border-double hover:border-2 hover:border-yellow-600 border-white transition duration-300 ease-out bg-gradient-to-t rounded-3xl from-black via-yellow-950 to-yellow-600 hover:drop-shadow-[0_15px_35px_rgba(237,144,10,0.35)] drop-shadow-[0_25px_25px_rgba(237,144,10,0.15)]`}
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
            {/* <img className='w-[calc(50%)] mx-auto p-4' src={experimentAnimation} alt='experiment'/> */}
            <h1 className='title-main font-bold text-2xl mx-auto text-center mt-10'>
              Gain <span className='text-yellow-200'>Experience</span>
            </h1>
            <p className='text-md mx-auto text-center py-2 px-6'>
              This is quite also a description.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
