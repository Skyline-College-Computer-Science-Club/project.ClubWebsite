'use client'

const bgSleepCat = '/assets/hackathon/hero.png'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const SHOWTIME = new Date(0).setSeconds(1713830400)

function secondsToDhms(seconds) {
    const d = Math.floor(seconds / (3600*24));
    const h = Math.floor(seconds % (3600*24) / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 60);
    
    const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
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
        <div className="flex flex-col w-screen h-screen justify-center items-center">

            <Image className="-z-10 absolute w-screen h-screen object-cover" src={bgSleepCat} width={2880} height={2620} quality={100} priority alt=""/>

            {/* <div className="text-8xl font-bold text-orange-200">Hackathon</div> */}
            <div className="text-4xl font-bold">{`${secondsToDhms(countdown / 1000)}`}</div>
        </div>
    )
}