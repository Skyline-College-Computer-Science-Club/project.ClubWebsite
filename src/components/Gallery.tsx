'use client'

import { useRef, useState } from 'react'
import { Element } from 'react-scroll'

import Image from 'next/image'
import { motion, useInView, useAnimate } from 'framer-motion'

import gallery from '../dispositions/gallery'

const imageClasses = 'relative max-h-[100%] min-w-[100%] object-cover duration-500 hover:!opacity-100 group-hover:opacity-70' // hover:object-contain
const listItemClasses = 'flex-grow p-0 w-[33vw] h-[26vh] hover:z-10 group/inner duration-500 hover:!z-10 active:!scale-[130%] hover:!scale-110'

interface GalleryPiece {
    remark: string,
    imgSrc: string
}

interface props_GalleryPiece {
    pieceDetails: GalleryPiece,
    index: number
}

const GalleryPiece: React.FC<props_GalleryPiece> = ({ pieceDetails, index }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const [isAnimating, setIsAnimating] = useState(true)

    return (
        <motion.div ref={ref} onAnimationComplete={() => {setIsAnimating(false)}} initial={{opacity: 0, transform: 'scale(1.05) translateY(10%)'}} animate={isInView ? {opacity: 1, transform: 'scale(1) translateY(0%)'} : {}} transition={{duration: 1, delay: index * 0.2, ease: 'easeInOut'}} 
            className={listItemClasses + (isAnimating ? ' pointer-events-none' : '')}>
            <p className='z-20 group-hover/inner:opacity-100 opacity-0 absolute bottom-0 w-full text-center duration-300 font-semibold text-shadow-sm shadow-black bg-[#00000050]'>{pieceDetails.remark}</p>
            <Image className={imageClasses} width={1000} height={1000} alt={pieceDetails.remark} src={pieceDetails.imgSrc}/>
        </motion.div>
    )
}

export default function Gallery() : React.ReactNode {
    return (
        <div className='w-full bg-gradient-to-b from-slate-900 via-black to-black text-gray-300'>
            <Element name='gallery'/>
            <div className='py-[8vh] overflow-hidden'>
                <div className='flex flex-wrap w-full group'>
                    {gallery.map((pieceDetails, index) => (<GalleryPiece key={crypto.randomUUID()} pieceDetails={pieceDetails} index={index}/>))}
                </div>
            </div>
        </div>
    )
}

/*

const [scope, animate] = useAnimate()

const isInView = useInView(scope, {once: true})
const [firstRender, setFirstRender] = useState(true)

useEffect(() => {
    if (isInView && firstRender) {
        setFirstRender(false)
        console.log('yes x')
        animate('li', {opacity: 0, scale: 1.05})
    }
}, [isInView, firstRender, scope, animate])

const [isAnimating, setIsAnimating] = useState(true)

*/