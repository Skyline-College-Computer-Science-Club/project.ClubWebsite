'use client'

const backdrop = '/assets/hackathon/backdrop.png'
const herologo = '/assets/hackathon/herologo.png'

import IntroFade from '../../components/IntroFade'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { useState, useEffect } from 'react'

const SHOWTIME = new Date(0).setSeconds(1713830400)


export default function() {

    const [altFormat, setAltFormat] = useState(false)
    const [countdown, setCountDown] = useState(0);

    function secondsToDhms(seconds: number) : string {
        const d = Math.floor(seconds / (3600 * 24))
        const h = Math.floor(seconds % (3600 * 24) / 3600)
        const m = Math.floor(seconds % 3600 / 60)
        const s = Math.floor(seconds % 60)
        
        if (altFormat) {
            const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
            const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "0 second";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }
    
        return d.toString().padStart(2, '0') + " : " + h.toString().padStart(2, '0') + " : " + m.toString().padStart(2, '0') + " : "  + s.toString().padStart(2, '0');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(SHOWTIME - Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    return (
        <>
            <IntroFade />
            <div className="flex flex-col w-screen h-screen justify-center items-center overflow-hidden">

                <motion.div 
                    initial={{transform: "translateY(3%)"}} 
                    animate={{transform: "translateY(-3%)"}}
                    transition={{duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"}}
                >
                    <Image className="lg:h-[17vw] px-4 object-contain pointer-events-none" src={herologo} width={1000} height={1000} alt=""/>
                </motion.div>

                <motion.div 
                    className="-z-10 absolute w-screen h-screen pointer-events-none" 
                    initial={{transform: "translateY(10%)"}} 
                    animate={{transform: "translateY(0%)"}}
                    transition={{duration: 3, ease: "backOut"}}
                >
                    <Image className="w-full h-full object-cover" src={backdrop} width={2880} height={2620} quality={50} alt=""/>
                </motion.div>

                {/* <div className="text-8xl font-bold text-orange-200">Hackathon</div> */}
                <div className="text-4xl font-bold font-Ubuntu mt-4 bg-[#00000075] rounded-2xl p-2 px-12" onMouseEnter={() => { setAltFormat(true) }} onMouseLeave={() => { setAltFormat(false) }}>{`${secondsToDhms(countdown / 1000)}`}</div>

                <div className="flex flex-col sm:flex-row mt-4 gap-3">
                    <a href="https://forms.gle/k9y4ZKbnatqiSBFRA">
                        <div className="flex bg-[#1bff2675] rounded-2xl sm:w-40 h-10 font-semibold transition-all hover:scale-105 text-center">
                            <span className="absolute flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40ff4a] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#40ff4a]"></span>
                            </span>
                            <span className="mx-auto my-auto text-center">
                                ✅ Apply Now!
                            </span>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1H9kzRPuWqiKmZSB3WRJo_PqzxrOWLSpB/view?usp=sharing">
                        <div className="bg-[#ffd035a4] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center">🕒 The Timeline</div>
                    </a>
                    <a href="https://docs.google.com/document/d/15pP7UGDzaynIAKgSyr7UfDeE1j1VzpseOmH3kx6Ukv0/edit?usp=sharing">
                        <div className="bg-[#cc00ff75] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center">📖 Hacker Handbook</div>
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row mt-2 gap-2">
                    <a href="https://discord.gg/z5P9kccwRh">
                        <div className="bg-[#23156475] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center">Join Skyline's CSC Discord</div>
                    </a>
                    <a href="https://discord.gg/g8dvmWCXPB">
                        <div className="bg-[#23156475] rounded-2xl p-2 px-6 font-semibold transition-all hover:scale-105 text-center">Join San Mateo's CSC Discord</div>
                    </a>
                </div>

            </div>
        </>
    )
}