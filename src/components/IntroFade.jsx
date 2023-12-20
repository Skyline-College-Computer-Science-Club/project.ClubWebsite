import { motion } from 'framer-motion'

export default function IntroFade() {
    return (
        <motion.div name='overlay_introfade' initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 2, ease: 'easeOut'}} className='z-50 pointer-events-none absolute w-full h-full bg-black'/>
    )
}