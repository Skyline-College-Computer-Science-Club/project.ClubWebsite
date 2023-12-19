import { motion } from 'framer-motion'

export default function IntroFade() {
    return (
        <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 1, ease: 'easeOut'}} name='overlay_introfade' className='z-50 pointer-events-none absolute w-full h-full bg-black'/>
    )
}