'use client'

import Image from 'next/image'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const kitty = '/assets/mascot.gif'
const loader = '/assets/utility/loader.gif'

export default function IntroFade(): React.ReactNode {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 1 }}
            animate={isInView ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
            className='z-30 flex flex-col items-center justify-center pointer-events-none absolute w-full h-screen bg-black'
        >
            <Image
                src={kitty}
                className='opacity-70'
                alt=''
                width={100}
                height={100}
            />
            <Image
                src={loader}
                className='opacity-70'
                alt=''
                width={100}
                height={100}
            />

            {/* <p className="text-neutral-500">Loading...</p> */}
        </motion.div>
    )
}
