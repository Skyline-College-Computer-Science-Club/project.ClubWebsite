'use client'

import Gallery from '../../components/Gallery'
import { HackathonCollection } from '../../dispositions/gallery'

import IntroFade from '../../components/IntroFade'

import { motion } from 'framer-motion'
import Image from 'next/image'

import Typed from 'react-typed'

import { useState, useEffect } from 'react'

const backdrop = '/assets/hackathon/backdrop.png'
const herologo = '/assets/hackathon/herologo.png'

const SHOWTIME = new Date(0).setSeconds(1713826800) // 4:00 - 04/22/24
const ENDTIME = new Date(0).setSeconds(1714431600) // 4:00 - 04/29/24

const GALLERY_TYPED_WORDS = [
    'Experience Software Development',
    'Experience Project Design',
    'Experience Team Coordination',
    'Experience Real-World Programming',
]

export default function Hackathon() {
    const [altFormat, setAltFormat] = useState(false)
    const [countdown, setCountDown] = useState(0)

    function secondsToDhms(seconds: number): string {
        const negative = seconds < 0
        seconds = Math.abs(seconds)
        const d = Math.floor(seconds / (3600 * 24))
        const h = Math.floor((seconds % (3600 * 24)) / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = Math.floor(seconds % 60)

        if (altFormat) {
            return (
                (d > 0 ? d + (d == 1 ? ' day, ' : ' days, ') : '') +
                (m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '') +
                (h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '') +
                (s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '0 seconds') +
                (negative ? ' ago' : '')
            )
        }

        return (
            'T' +
            (negative ? ' + ' : ' - ') +
            d.toString().padStart(2, '0') +
            ' : ' +
            h.toString().padStart(2, '0') +
            ' : ' +
            m.toString().padStart(2, '0') +
            ' : ' +
            s.toString().padStart(2, '0')
        )
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (SHOWTIME - Date.now() > 0) {
                setCountDown(SHOWTIME - Date.now())
            } else {
                setCountDown(ENDTIME - Date.now())
            }
        }, 500)

        return () => clearInterval(interval)
    }, [countdown])

    return (
        <>
            <IntroFade />
            <div className='flex flex-col w-full h-screen justify-center items-center overflow-hidden'>
                <motion.div
                    initial={{ transform: 'translateY(3%)' }}
                    animate={{ transform: 'translateY(-3%)' }}
                    transition={{
                        duration: 3,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                >
                    <Image
                        className='lg:h-[17vw] px-4 object-contain pointer-events-none'
                        src={herologo}
                        width={1000}
                        height={1000}
                        alt=''
                    />
                </motion.div>

                <motion.div
                    className='-z-10 absolute w-full h-screen pointer-events-none'
                    initial={{ transform: 'translateY(10%)' }}
                    animate={{ transform: 'translateY(0%)' }}
                    transition={{ duration: 3, ease: 'backOut' }}
                >
                    <Image
                        className='object-cover'
                        src={backdrop}
                        width={2880}
                        height={2620}
                        quality={50}
                        alt=''
                    />
                </motion.div>

                {/* <div className="text-8xl font-bold text-orange-200">Hackathon</div> */}
                <div
                    className={'text-center font-bold font-Ubuntu mt-4 bg-[#00000075] rounded-2xl p-2 px-12 ' + (altFormat ? 'sm:text-xl text-xl' : 'sm:text-4xl text-2xl')}
                    onMouseEnter={() => {
                        setAltFormat(true)
                    }}
                    onMouseLeave={() => {
                        setAltFormat(false)
                    }}
                >
                    {`${secondsToDhms(countdown / 1000)}`}
                </div>

                <div className='text-sm sm:text-xl text-center font-bold mt-4 bg-[#44444470] rounded-2xl p-2 px-12 whitespace-pre-line'>
                    {"Our Exploration Mission has come to an end!\nThanks for participating in this historic event! See you next year!"}
                </div>

                <div className='flex flex-col sm:flex-row mt-4 gap-3'>
                    {/* <a href='https://forms.gle/k9y4ZKbnatqiS  BFRA'> */}
                        <div className='flex bg-[#c51a1a75] rounded-2xl sm:w-40 h-10 font-semibold transition-all hover:scale-105 text-center'>
                            <span className='absolute flex h-3 w-3'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d40] opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-3 w-3 bg-[#ff4d40]'></span>
                            </span>
                            <span className='mx-auto my-auto text-center'>
                                ⛔ Apps Closed
                            </span>
                        </div>
                    {/* </a> */}
                    <a href='https://drive.google.com/file/d/1H9kzRPuWqiKmZSB3WRJo_PqzxrOWLSpB/view?usp=sharing'>
                        <div className='bg-[#ffd035a4] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            🕒 The Timeline
                        </div>
                    </a>
                    <a href='https://docs.google.com/document/d/15pP7UGDzaynIAKgSyr7UfDeE1j1VzpseOmH3kx6Ukv0/edit?usp=sharing'>
                        <div className='bg-[#cc00ff75] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            📖 Hacker Handbook
                        </div>
                    </a>
                </div>

                <div className='flex flex-col sm:flex-row mt-2 gap-2'>
                    <a href='https://discord.gg/z5P9kccwRh'>
                        <div className='bg-[#23156475] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            Join Skyline's CSC Discord
                        </div>
                    </a>
                    <a href='https://discord.gg/g8dvmWCXPB'>
                        <div className='bg-[#23156475] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center'>
                            Join San Mateo's CSC Discord
                        </div>
                    </a>
                </div>

            </div>

            {/* <Gallery /> */}
            <div className='w-full bg-gradient-to-b from-slate-900 via-black to-black py-20'>
                <h1 className='title-main mx-auto text-4xl text-center sm:text-4xl font-extrabold text-white'>
                    <Typed
                        strings={GALLERY_TYPED_WORDS}
                        typeSpeed={50}
                        backSpeed={75}
                        backDelay={3000}
                        loop
                        className='bg-gradient-to-t from-white to-[#da5fff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,50,255,1)]'
                    ></Typed>
                </h1>

                <Gallery collection={HackathonCollection} />
            </div>
        </>
    )
}
