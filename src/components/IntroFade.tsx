'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function IntroFade() : React.ReactNode {

    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div ref={ref} initial={{opacity: 1}} animate={isInView ? {opacity: 0} : {opacity: 1}} transition={{duration: 2, ease: "easeOut"}} 
            className="z-50 pointer-events-none absolute w-full h-full bg-black"
        />
    )
}