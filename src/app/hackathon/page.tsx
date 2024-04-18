'use client'

const backdrop = '/assets/hackathon/backdrop.png'
const herologo = '/assets/hackathon/herologo.png'

import IntroFade from '../../components/IntroFade'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { useState, useEffect } from 'react'

const SHOWTIME = new Date(0).setSeconds(1713830400)

function secondsToDhms(seconds) {
    const d = Math.floor(seconds / (3600*24));
    const h = `${Math.floor(seconds % (3600*24) / 3600)}`.padStart(2, '0');
    const m = `${Math.floor(seconds % 3600 / 60)}`.padStart(2, '0');
    const s = `${Math.floor(seconds % 60)}`.padStart(2, '0');
    
    // const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    // const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    // const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    // const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    // return dDisplay + hDisplay + mDisplay + sDisplay;

    return d + " : " + h + " : " + m + " : "  + s;
}

export default function() {

    const [countdown, setCountDown] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(SHOWTIME - Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    return (
        <>
            {/* <IntroFade /> */}
            <div className="flex flex-col w-screen h-screen justify-center items-center">

                <motion.div 
                    initial={{transform: "translateY(2%)"}} 
                    animate={{transform: "translateY(-2%)"}}
                    transition={{duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror"}}
                >
                    <Image className="sm:h-[17vw] px-4 object-contain pointer-events-none" src={herologo} width={1000} height={1000} alt=""/>
                </motion.div>

                <motion.div 
                    className="-z-10 absolute w-screen h-screen pointer-events-none" 
                    initial={{transform: "translateY(10%)"}} 
                    animate={{transform: "translateY(0%)"}}
                    transition={{duration: 3, ease: "backOut"}}
                >
                    <Image className="w-full h-full object-cover" src={backdrop} width={2880} height={2620} quality={100} priority alt=""/>
                </motion.div>

                {/* <div className="text-8xl font-bold text-orange-200">Hackathon</div> */}
                <div className="text-4xl font-bold font-Ubuntu mt-4">{`${secondsToDhms(countdown / 1000)}`}</div>

            </div>
        </>
    )
}