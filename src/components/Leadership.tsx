'use client';

import React, { useRef, useState } from 'react';
import { Element } from 'react-scroll';

import Image from 'next/image';

import { motion, useInView } from 'framer-motion';
import { useSound } from 'use-sound';

import { SiLinktree, SiGithub, SiInstagram, SiDiscord, SiLinkedin } from 'react-icons/si';
import { FaNetworkWired, FaQuoteLeft } from 'react-icons/fa';

const sfx_clunk = '/assets/sound_fx/clunk.mp3';
const sfx_hoverThunk = '/assets/sound_fx/muffled_hover_thunk.mp3';
const sfx_discorda = '/assets/sound_fx/discorda.mp3';

const { leadership, FALLBACK_QUOTE } = require('../dispositions/leadership.tsx');

interface props_MajorLeaderCard {
    leaderName: string;
    index: number;
}

interface props_MinorLeaderCard {
    roleName: string;
    index: number;
}

const MajorLeaderCard: React.FC<props_MajorLeaderCard> = ({ leaderName, index }) => {

    const [playSfx_clunk] = useSound(sfx_clunk);
    const [playSfx_hoverThunk] = useSound(sfx_hoverThunk);
    const [playSfx_discorda] = useSound(sfx_discorda);

    const [displayQuote, setDisplayQuote] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const majorLeaderDetails = leadership.major[leaderName];

    return (
        <motion.div ref={ref} onAnimationStart={() => {setIsAnimating(true)}} onAnimationComplete={() => {setIsAnimating(false)}} onMouseEnter={() => playSfx_hoverThunk()}
            initial={{ opacity: 0, transform: "translateX(50%)" }} animate={isInView ? { opacity: 1, transform: "translateX(0%)" } : ""} transition={{duration: 1, delay: index * 0.1, ease: "easeOut"}} 
            className={`${isAnimating && "pointer-events-none"} min-w-[230px] max-w-[200px] hover:z-20 ring-2 ring-green-950 relative group opacity-0 hover:rounded-b-none hover:!scale-105 transition duration-300 ease-out select-none rounded-xl bg-gradient-to-t from-[#040404] via-green-950 to-green-950`} key={leaderName}>

            {/* Leader Portrait + Leader Quote Overlay */}
            <div className="hover:scale-105 active:scale-95 transition duration-300 ease-out" onMouseDown={() => {
                    setDisplayQuote(!displayQuote);
                    playSfx_clunk();
                }} onMouseUp={() => playSfx_clunk()}>

                <motion.div animate={displayQuote ? { opacity: 1 } : { opacity: 0 }} className="z-10 absolute w-full outline-4 active:outline-8 active:outline-neutral-100 duration-200 outline-double opacity-0 outline-black bg-gradient-to-b from-[#040a0470] to-black rounded-xl drop-shadow-2xl">
                    <motion.div className="absolute" initial={{ transform: "translateY(-8%)" }} animate={{transform: "translateY(8%)"}} transition={{repeat: Infinity, repeatType: "mirror", ease: "linear", duration: 1.5 }}>
                        <FaQuoteLeft size={32} className="m-4"/>
                    </motion.div>

                    <div className="aspect-square w-full flex items-center px-6 font-semibold text-shadow-lg shadow-black">
                        {/* whitespace-pre-line enables usage of specifically \n */}
                        <div className="text-center whitespace-pre-line">{majorLeaderDetails.quote ? majorLeaderDetails.quote : FALLBACK_QUOTE}</div>
                    </div>
                </motion.div> 

                <Image width={1024} height={1024} className="rounded-xl aspect-square" alt="mascot" src={majorLeaderDetails.imgSrc}/>
            </div>

            {/* Leader Name and Role */}
            <div className="rounded-xl p-4 group-hover:pb-0">
                <div className="absolute w-full">
                    {majorLeaderDetails.icon}
                </div>
                <h1 className="title-main text-xl font-semibold text-center">{leaderName}</h1>
                <h2 className="text-lg font-semibold text-center">{majorLeaderDetails.role}</h2>
            </div>

            {/* Leader socials and other links, dynamically generated */}
            <div onMouseDown={() => playSfx_clunk()} onMouseUp={() => playSfx_clunk()} className="z-10 absolute hidden group-hover:flex border-b-4 border-green-700 justify-center w-full rounded-b-xl bg-gradient-to-b from-[#040a04] to-black gap-2 px-2 pb-2">
                {majorLeaderDetails.linktree ? <a className="hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out" href={majorLeaderDetails.linktree} target="_blank" rel="noreferrer"><SiLinktree size={"3vh"} className="h-10"/></a> : <></>}
                {majorLeaderDetails.github ? <a className="hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out" href={majorLeaderDetails.github} target="_blank" rel="noreferrer"><SiGithub size={"3vh"} className="h-10"/></a> : <></>}
                {majorLeaderDetails.instagram ? <a className="hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out" href={majorLeaderDetails.instagram} target="_blank" rel="noreferrer"><SiInstagram size={"3vh"} className="h-10"/></a> : <></>}
                {majorLeaderDetails.discord ? <a className="hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out" href={majorLeaderDetails.discord} target="_blank" rel="noreferrer"><SiDiscord onMouseUp={() => playSfx_discorda()} size={"3vh"} className="h-10"/></a> : <></>}
                {majorLeaderDetails.linkedin ? <a className="hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out" href={majorLeaderDetails.linkedin} target="_blank" rel="noreferrer"><SiLinkedin size={"3vh"} className="h-10"/></a> : <></>}
                {majorLeaderDetails.website ? <a className="hover:scale-110 active:scale-90 active:opacity-90 transition duration-200 ease-out" href={majorLeaderDetails.website} target="_blank" rel="noreferrer"><FaNetworkWired size={"3vh"} className="h-10"/></a> : <></>}
            </div>

        </motion.div>
    )
}

const MinorLeaderCard: React.FC<props_MinorLeaderCard> = ({ roleName, index }) => {

    const [playSfx_hoverThunk] = useSound(sfx_hoverThunk);

    const [isAnimating, setIsAnimating] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const minorLeaderDetails = leadership.minor[roleName];

    return (
        <motion.div ref={ref} onAnimationStart={() => {setIsAnimating(true)}} onAnimationComplete={() => {setIsAnimating(false)}} onMouseEnter={() => playSfx_hoverThunk()}
            initial={{ opacity: 0, transform: "translateX(50%)" }} animate={isInView ? { opacity: 1, transform: "translateX(0%)" } : ""} transition={{duration: 1.3, delay: index * 0.3, ease: "easeOut"}} 
            className={`${isAnimating && "pointer-events-none"} w-[270px] hover:z-20 relative group opacity-0 hover:!scale-105 border-b border-neutral-800 border-1 transition duration-300 ease-out select-none rounded-xl bg-gradient-to-b ${minorLeaderDetails.color} to-transparent`} key={roleName}>

            {/* Role and Name of Person */}
            <div className="rounded-xl p-4">
                <div className="absolute w-full">
                    {minorLeaderDetails.icon}
                </div>
                <h1 className="title-main text-xl font-semibold text-center">{roleName}</h1>
                <h2 className="text-lg font-semibold text-center">{minorLeaderDetails.name}</h2>
            </div>
        </motion.div>
    )
}

export default function Leadership() : React.ReactNode {
    return (
        // bg-[radial-gradient(#000_1px,transparent_1px)]
        <div className="w-full h-full py-80  text-gray-300 bg-gradient-to-b from-black via-[#031302] to-black">

            <Element name="leadership"/>

            <div className="flex flex-col justify-center items-center w-full h-full px-[8vw] xl:px-[15vw] gap-6">
                <div>
                    <h1 className="title-main w-full text-center text-4xl font-semibold drop-shadow-[0_0_30px_rgba(255,255,255,1)]">Our Club Leadership</h1>
                    <h1 className="title-main w-full text-center text-2xl font-semibold">👑 2023 - 2024 👑</h1>
                </div>
                
                {/* <div className="grid grid-cols-4 gap-6 my-4 mx-[20%]"> */}
                <div className="w-full text-4xl font-semibold border-b-2 border-[#345222] drop-shadow-[0_0_30px_rgba(50,255,50,1)] overflow-hidden"></div>

                {/* Major Leadership */}
                <div className="flex flex-row flex-wrap justify-center align-middle gap-x-8 gap-y-6">
                    {Object.keys(leadership.major).map((majorLeaderName, index) => (<MajorLeaderCard key={majorLeaderName + index} index={index} leaderName={majorLeaderName}/>))}
                </div>

                {/* Minor Leadership Roles */}
                <div className="flex flex-row flex-wrap justify-center align-middle gap-x-8 gap-y-6">
                    {Object.keys(leadership.minor).map((minorLeaderRoleName, index) => (<MinorLeaderCard key={minorLeaderRoleName + index} index={index} roleName={minorLeaderRoleName}/>))}
                </div>

                <p className="text-neutral-700 font-Poppins font-semibold">pssst! past Officers to be shown soon!</p>
                <div className="w-full text-4xl font-semibold border-b-2 border-[#345222] drop-shadow-[0_0_30px_rgba(50,255,50,1)]"></div>
            </div>
        </div>
    )
}