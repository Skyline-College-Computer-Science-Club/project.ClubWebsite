'use client'

import { useRef, useState } from 'react'
import { Element } from 'react-scroll'

import Image from 'next/image'
import { motion, useInView, useAnimate } from 'framer-motion'

import gallery from '../dispositions/gallery'

const imageClasses = 'relative max-h-full w-full object-cover duration-500 hover:!opacity-100 hover:!scale-110 hover:border-4 border-0 border-white rounded-lg group-hover:opacity-80' // hover:object-contain
const listItemClasses = 'flex-grow p-1 h-[400px] hover:z-10 group/inner duration-500 hover:!z-10 active:!scale-[140%] hover:max-h-[600px]'

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
        <motion.div ref={ref} onAnimationComplete={() => {setIsAnimating(false)}} initial={{opacity: 0, transform: "scale(1.05) translateY(10%)"}} animate={isInView ? {opacity: 1, transform: "scale(1) translateY(0%)"} : {}} transition={{duration: 1, delay: index * 0.2, ease: "easeInOut"}} 
            className={listItemClasses + (isAnimating ? " pointer-events-none" : "")}>
            <Image className={imageClasses} width={1200} height={1200} alt={pieceDetails.remark} src={pieceDetails.imgSrc}/>
            <p className="z-20 group-hover/inner:opacity-100 opacity-0 absolute rounded-2xl bottom-0 w-full text-center duration-300 font-semibold text-shadow-lg shadow-black bg-[#00000090] whitespace-pre-line">{pieceDetails.remark}</p>
        </motion.div>
    )
}

export default function Gallery() : React.ReactNode {
    return (
        <div className="w-full bg-gradient-to-b from-slate-900 via-black to-black text-gray-300">
            <Element name="gallery"/>
            <div className="py-[200px] overflow-hidden">
                <div className="flex flex-wrap w-full group">
                    {gallery.map((pieceDetails, index) => (<GalleryPiece key={crypto.randomUUID()} pieceDetails={pieceDetails} index={index}/>))}
                </div>
            </div>
        </div>
    )
}