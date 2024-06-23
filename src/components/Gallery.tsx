'use client'

import { useRef, useState } from 'react'
import useSound from 'use-sound'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const sfx_clunk = '/assets/sound_fx/clunk.mp3'

const imageClasses =
    'relative h-full w-full object-cover duration-500 hover:!opacity-100 hover:!scale-110 hover:outline-[6px] outline-0 outline-white outline rounded-lg group-hover:opacity-100'
const listItemClasses =
    'flex-grow p-1 min-h-[120px] h-[21vw] hover:z-10 group/inner duration-500 hover:!z-10 active:!scale-[140%] hover:max-h-[600px]'

interface GalleryPiece {
    remark: string
    imgSrc: string
}

function GalleryPiece({
    pieceDetails,
    index,
}: {
    pieceDetails: GalleryPiece
    index: number
}): React.ReactNode {
    const [playSfx_clunk] = useSound(sfx_clunk)

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [isAnimating, setIsAnimating] = useState(true)

    return (
        <motion.div
            ref={ref}
            onMouseEnter={() => {
                playSfx_clunk()
            }}
            onAnimationComplete={() => {
                setIsAnimating(false)
            }}
            initial={{ opacity: 0, transform: 'scale(1.05) translateY(10%)' }}
            animate={
                isInView
                    ? { opacity: 1, transform: 'scale(1) translateY(0%)' }
                    : {}
            }
            transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: 'easeInOut',
            }}
            className={
                listItemClasses + (isAnimating ? ' pointer-events-none' : '')
            }
        >
            <Image
                key={index}
                className={imageClasses}
                width={1000}
                height={1000}
                alt=''
                src={pieceDetails.imgSrc}
            />
            <p className='z-20 group-hover/inner:opacity-100 opacity-0 absolute rounded-2xl bottom-0 w-full text-center duration-300 font-semibold text-shadow-lg shadow-black bg-[#00000090] whitespace-pre-line pointer-events-none'>
                {pieceDetails.remark}
            </p>
        </motion.div>
    )
}

export default function Gallery({
    collection,
}: {
    collection: Array<GalleryPiece>
}): React.ReactNode {
    return (
        <div className='flex flex-wrap w-full group py-20 overflow-x-hidden'>
            {collection.map((pieceDetails, index) => (
                <GalleryPiece
                    key={pieceDetails.toString()}
                    pieceDetails={pieceDetails}
                    index={index}   
                />
            ))}
        </div>
    )
}
