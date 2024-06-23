'use client'

import { Element } from 'react-scroll'
import Image from 'next/image'

export default function Recruitment(): React.ReactNode {
    return (
        <div className='w-full h-screen flex flex-col gap-2 justify-center items-center p-4'>
            <Image
                src='/assets/home/bg_astronomics_brown.webp'
                width={1600}
                height={1000}
                alt='background'
                className='-z-10 object-cover aspect-auto` absolute w-full h-full opacity-[80%]'
            />

            <Element name='Recruitment' />

            <iframe
                title='discord'
                src='https://ptb.discord.com/widget?id=939701223144185867&theme=dark'
                width='82.5%'
                height='72'
                className='rounded-2xl'
                sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
            ></iframe>

            <iframe src="https://e.widgetbot.io/channels/939701223144185867/939701223144185874" 
                allow="clipboard-write; fullscreen" 
                height="600" 
                className='rounded-2xl'
                width="82.5%">
            </iframe>

        </div>
    )
}
    