'use client'

const backdrop = '/assets/hackathon/backdrop.png'
const herologo = '/assets/hackathon/herologo.png'

import IntroFade from '../../../components/IntroFade'
import Typed from 'react-typed'

import { Scanner, useDeviceList } from '@yudiel/react-qr-scanner'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { QrReader } from 'react-qr-reader'

import { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { redirect } from 'next/navigation'

async function queryDatabase(email) {
    const request = {
        method: 'POST',
        body: JSON.stringify({ email: email }),
    }

    const response = await fetch('/api/checkin', request)

    console.log('Fetch response received.')

    const jsonResponse = await response.json()

    console.log(jsonResponse)

    return jsonResponse
}

const LOAD_TIME = Date.now()

export default function ({ params }) {
    const router = useRouter()

    const [targetCamera, setTargetCamera] = useState(null)

    const participant = {
        name: decodeURIComponent(params.slug[0]),
        email: decodeURIComponent(params.slug[1]),
        college: decodeURIComponent(params.slug[2]),
    }

    const [elapsedTime, setElapsedTime] = useState(0)

    const cameras = useDeviceList()

    function secondsToDhms(seconds) {
        seconds = Math.abs(seconds)
        const d = Math.floor(seconds / (3600 * 24))
        const h = Math.floor((seconds % (3600 * 24)) / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = Math.floor(seconds % 60)

        return (
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
            setElapsedTime(LOAD_TIME - Date.now())
        }, 1000)

        return () => clearInterval(interval)
    }, [elapsedTime])

    useEffect(() => {
        if (cameras.length > 0 && targetCamera == null) {
            setTargetCamera(cameras[0].deviceId)
        }
    }, [cameras])

    const [data, setData] = useState('Nothing')

    return (
        <>
            <IntroFade />
            <div className='flex flex-col w-screen h-screen justify-center items-center overflow-hidden'>
                {/* Hackaton Hero Logo */}
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

                {/* Hero Backdrop */}
                <motion.div
                    className='-z-10 absolute w-screen h-screen pointer-events-none'
                    initial={{ transform: 'translateY(10%)' }}
                    animate={{ transform: 'translateY(0%)' }}
                    transition={{ duration: 3, ease: 'backOut' }}
                >
                    <Image
                        className='w-full h-full object-cover'
                        src={backdrop}
                        width={2880}
                        height={2620}
                        quality={50}
                        alt=''
                    />
                </motion.div>

                <p className='text-xl font-semibold font-Ubuntu mb-1 mt-4 bg-[#00000075] rounded-2xl px-4 py-1'>
                    Time Elapsed Since Scan
                </p>

                <div className='flex text-2xl font-Ubuntu my-2 bg-[#00000075] rounded-2xl w-72 h-14 font-semibold transition-all hover:scale-105 text-center'>
                    <span className='absolute flex h-3 w-3'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fff] opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-3 w-3 bg-[rgb(255,255,255)]'></span>
                    </span>
                    <span className='mx-auto my-auto text-center'>
                        {`${secondsToDhms(elapsedTime / 1000)}`}
                    </span>
                </div>

                <p className='text-xl font-semibold font-Ubuntu my-1 bg-[#00000075] rounded-2xl px-6 py-1'>
                    This <span className='text-pink-500'>Explorer's</span> Deets
                </p>

                <div className='flex flex-col my-1 gap-3 items-center'>
                    <div className='bg-[#ffd035a4] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center w-full'>
                        <Typed
                            strings={[participant.name]}
                            typeSpeed={75}
                            backSpeed={75}
                            backDelay={99999}
                            loop
                            className='bg-gradient-to-t from-white to-white bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,1)] font-bold'
                        ></Typed>
                    </div>
                    <div className='bg-[#cc00ff75] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center w-full'>
                        <Typed
                            strings={[participant.email]}
                            typeSpeed={75}
                            backSpeed={75}
                            backDelay={99999}
                            loop
                            className='bg-gradient-to-t from-white to-white bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,1)] font-bold'
                        ></Typed>
                    </div>
                    <div className='bg-[#0f6186] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center w-full'>
                        From{' '}
                        <Typed
                            strings={[participant.college]}
                            typeSpeed={75}
                            backSpeed={75}
                            backDelay={99999}
                            loop
                            className='text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)] font-bold'
                        ></Typed>
                    </div>

                    <p className='text-xl font-semibold font-Ubuntu my-1 bg-[#ff111175] rounded-2xl px-6 py-1'>
                        DANGER ZONE
                    </p>

                    <div className='flex bg-[#1bff2675] rounded-2xl w-60 h-10 font-semibold transition-all hover:scale-105 text-center'>
                        <span className='absolute flex h-3 w-3'>
                            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40ff4a] opacity-75'></span>
                            <span className='relative inline-flex rounded-full h-3 w-3 bg-[#40ff4a]'></span>
                        </span>
                        <span
                            className='mx-auto my-auto text-center cursor-grab'
                            onMouseDown={() => {
                                queryDatabase(participant.email)
                            }}
                        >
                            ✅ Confirm This Explorer
                        </span>
                    </div>
                    <p>Made with 💖 and no ☕ by Lance Ruiz</p>
                </div>
                {/* <div className="text-4xl font-bold font-Ubuntu mt-4 bg-[#00000075] rounded-2xl p-2 px-12">
                    {`${decodeURIComponent(params.slug)}`}
                </div> */}
            </div>

            <div className='flex flex-col items-center'>
                <Scanner
                    onResult={(text, result) => {
                        if (text != data) {
                            text = `https://skycsc.vercel.app/` + text.slice(22)
                            console.log(text)
                            router.push(text)
                            router.refresh()
                            setData(text)
                        }
                    }}
                    onError={(error) => {
                        console.log(error?.message)
                    }}
                    options={{
                        deviceId: targetCamera,
                    }}
                    className='scale-x-[-1] w-72'
                />

                {/* <QrReader
                    className="scale-x-[-1] w-[50%]"
                    onResult={(result, error) => {
                        console.log(result)
                        if (result && (data != result.text)) {
                            setData(result.text)
                            
                            
                        }

                        if (error) {
                            console.info(error)
                        }
                    }}
                />
                 */}

                <p>{data}</p>
            </div>
        </>
    )
}
