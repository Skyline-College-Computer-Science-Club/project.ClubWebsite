'use client'

import { useRef, useState } from 'react'
import { Element } from 'react-scroll'
import Typed from 'react-typed'

import Image from 'next/image'
import { motion, useInView, useAnimate } from 'framer-motion'

import gallery from '../dispositions/gallery'

const SECTION_TYPED_KEYWORDS = ["Social Events", "Hackathons", "Technology Workshops", "Field Trips"]

const imageClasses = 'relative max-h-full w-full object-cover duration-500 hover:!opacity-100 hover:!scale-110 hover:outline-[6px] outline-0 outline-white outline rounded-lg group-hover:opacity-100' // 
const listItemClasses = 'flex-grow p-1 min-h-[120px] h-[21vw] hover:z-10 group/inner duration-500 hover:!z-10 active:!scale-[140%] hover:max-h-[600px]'

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
            <Image key={index} className={imageClasses} width={1000} height={1000} alt={pieceDetails.remark} src={pieceDetails.imgSrc}/>
            <p className="z-20 group-hover/inner:opacity-100 opacity-0 absolute rounded-2xl bottom-0 w-full text-center duration-300 font-semibold text-shadow-lg shadow-black bg-[#00000090] whitespace-pre-line pointer-events-none">{pieceDetails.remark}</p>
        </motion.div>
    )
}

export default function Gallery() : React.ReactNode {
    return (
        <div className="w-full bg-gradient-to-b from-slate-900 via-black to-black py-20">

            <h1 className="title-main mx-auto text-2xl text-center sm:text-4xl font-extrabold text-white"> 
                <span className="text-shadow shadow-gray-700">Journey with us in</span> <Typed strings={SECTION_TYPED_KEYWORDS} typeSpeed={50} backSpeed={75} backDelay={5000} loop className="bg-gradient-to-t from-yellow-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(225,200,255,0.5)]"></Typed>
            </h1>

            <Element name="gallery"/>

            <div className="py-20 overflow-hidden">
                <div className="flex flex-wrap w-full group">
                    {gallery.map((pieceDetails, index) => (<GalleryPiece key={index} pieceDetails={pieceDetails} index={index}/>))}
                </div>
            </div>
        </div>
    )
}