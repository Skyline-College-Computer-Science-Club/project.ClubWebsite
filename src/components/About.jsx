import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useSound } from 'use-sound'

import { FcCollaboration, FcElectronics, FcIdea } from 'react-icons/fc'

import sfxClunk from '../assets/sound_fx/clunk.mp3'


// import experimentAnimation from '../assets/home/experiment.gif'

export default function About() {

    const [playClunk] = useSound(sfxClunk)

    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <div name='about' ref={ref} className='w-full h-full bg-gradient-to-b from-black to-slate-950 text-gray-300 py-40 mt-40'>
            
            <div className='flex flex-col justify-center items-center w-full h-full'>

                <h1 className='title-main mx-auto my-4 text-3xl font-semibold inline border-b-2 border-[#46f4c9]'>About Us</h1>
                
                <div className='grid grid-cols-3 gap-6 my-4 mx-[20%]'>

                    {/* Discover Software */}
                    
                    <motion.div ref={ref} onMouseEnter={playClunk} onMouseDown={playClunk} onMouseUp={playClunk} initial={{opacity: 0, transform: 'translateX(-30%)'}} animate={isInView ? { opacity: 1, transform: 'translateX(0%)'} : ''} transition={{duration: 1.2, delay: 0.2, ease: 'easeOut'}} className='w-[18vw] h-[24vw] hover:!scale-105 active:!scale-100 transition duration-300 ease-out bg-gradient-to-t rounded-3xl from-black to-green-700 p-4 drop-shadow-[0_35px_25px_rgba(50,255,100,0.1)]'>
                        <motion.div className='relative my-[8%]' initial={{transform: 'translateY(-5%)'}} animate={{transform: 'translateY(5%)'}} transition={{repeat: Infinity, delay: 0.5, repeatType: 'mirror', type: 'tween', ease: 'backInOut', duration: 2 }}>
                            <FcElectronics className='mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)]' size={'50%'}/>
                        </motion.div>
                        <h1 className='title-main font-bold text-2xl mx-auto text-center my-auto'>Discover Software</h1>
                        <p className='text-lg mx-auto text-center p-4'>This is a description.</p>
                    </motion.div>

                    {/* Make Connections */}
                    <motion.div ref={ref} onMouseEnter={playClunk} onMouseDown={playClunk} onMouseUp={playClunk} initial={{opacity: 0, transform: 'translateY(30%)'}} animate={isInView ? { opacity: 1, transform: 'translateY(0%)'} : ''} transition={{duration: 1, delay: 0.4, ease: 'easeOut'}} className='w-[18vw] h-[24vw] hover:!scale-105 active:!scale-100 transition duration-300 ease-out bg-gradient-to-t rounded-3xl from-black to-blue-900 p-4 drop-shadow-[0_35px_25px_rgba(50,50,250,0.1)]'>
                        <motion.div className='relative my-[8%]' initial={{transform: 'translateY(-5%)'}} animate={{transform: 'translateY(5%)'}} transition={{repeat: Infinity, delay: 1, repeatType: 'mirror', type: 'tween', ease: 'backInOut', duration: 2 }}>
                            <FcCollaboration className='mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)]' size={'50%'}/>
                        </motion.div>
                        <h1 className='title-main font-bold text-2xl mx-auto text-center my-auto'>Make Connections</h1>
                        <p className='text-lg mx-auto text-center p-4 semib'>This is a description.</p>
                    </motion.div>
                    
                    {/* Gain Experience */}
                    <motion.div ref={ref} onMouseEnter={playClunk} onMouseDown={playClunk} onMouseUp={playClunk} initial={{opacity: 0, transform: 'translateX(30%)'}} animate={isInView ? { opacity: 1, transform: 'translateX(0%)'} : ''} transition={{duration: 1.2, delay: 0.2, ease: 'easeOut'}} className='w-[18vw] h-[24vw] hover:!scale-105 active:!scale-100 transition duration-300 ease-out bg-gradient-to-t rounded-3xl from-black to-yellow-700 p-4 drop-shadow-[0_35px_25px_rgba(236,210,100,0.1)]'>
                        <motion.div className='relative my-[8%]' initial={{transform: 'translateY(-5%)'}} animate={{transform: 'translateY(5%)'}} transition={{repeat: Infinity, delay: 1.5, repeatType: 'mirror', type: 'tween', ease: 'backInOut', duration: 2 }}>
                            <FcIdea className='mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.7)]' size={'50%'}/>
                        </motion.div>
                        {/* <img className='w-[calc(50%)] mx-auto p-4' src={experimentAnimation} alt='experiment'/> */}
                        <h1 className='title-main font-bold text-2xl mx-auto text-center my-auto'>Gain Experience</h1>
                        <p className='text-lg mx-auto text-center p-4'>This is a description.</p>
                    </motion.div>
                    
                </div>

            </div>

        </div>
    )
}