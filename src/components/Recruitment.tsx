'use client'

import { Element } from 'react-scroll'
import Image from 'next/image'

const kitty = '/assets/mascot.gif'

export default function Recruitment(): React.ReactNode {
    return (
            
            <div className='w-full h-[200vh] relative overflow-hidden'>
                
                {/* top        */}{' '}
                <div className='bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[15%]'></div>
                {/* bottom     */}{' '}
                <div className='bg-gradient-to-t from-[#0a0a0a] to-transparent absolute bottom-0 w-full h-[30%]'></div>
                {/* cent-left  */}

                <Image
                    src='/assets/home/skyline_backdrop_negative.png'
                    width={1600}
                    height={1600}
                    alt=''
                    className='-z-10 bg-white object-cover aspect-auto` absolute w-full h-full opacity-[80%]'
                />

                <div className='w-full h-[102vh] flex absolute bottom-[12rem] flex-col gap-4 justify-center items-center'>

                    <Image
                        src={kitty}
                        className='z-10 hover:!scale-105 transition duration-300 ease-out'
                        alt=''
                        width={100}
                        height={100}
                    />

                    <div className='pt-4 pb-10'>
                        <h1 className='title-main w-full text-center text-4xl font-semibold'>
                            
                            <span className='text-green-400 drop-shadow-[0_0_10px_rgba(50,250,50,0.45)]'>
                            Join Us.{' '}
                            </span>
                            <span className='text-yellow-300 drop-shadow-[0_0_10px_rgba(255,250,50,0.45)]'>
                                The Computer Science Club.
                            </span>
                        </h1>
                        <h1 className='title-main w-full text-center text-5xl font-semibold mt-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'>
                            Open to all for 2024 - 2025.
                        </h1>
                        <h1 className='title-main w-full text-center text-xl font-semibold mt-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'>
                            Join our Community on Discord Below.
                        </h1>
                    </div>

                    <iframe src="https://e.widgetbot.io/channels/939701223144185867/939701223144185874" 
                        allow="clipboard-write; fullscreen" 
                        height="600" 
                        className='rounded-2xl drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]'
                        width="75%">
                    </iframe>

                    <a href='https://discord.com/invite/z5P9kccwRh' target='_blank' className='w-[75%] h-[72px] hover:scale-[101%] hover:animate-pulse transition-all opacity-70 hover:opacity-85 duration-300'>
                        <iframe
                            title='discord'
                            src='https://ptb.discord.com/widget?id=939701223144185867&theme=dark'
                            width='100%'
                            height='72'
                            className='rounded-2xl pointer-events-none '
                            sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                        ></iframe>
                        <p className='font-semibold mt-2 ml-2'>Click above to join!</p>
                    </a>

                    <Element name='recruitment' />

                </div>

            
        </div>
    )
}
    