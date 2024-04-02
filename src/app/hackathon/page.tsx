const bgSleepCat = '/assets/bg_sleepCat.gif'

import Image from 'next/image'

export default function() {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">

            <Image className="opacity-10 absolute w-screen h-screen object-cover" src={bgSleepCat} width={1000} height={1000}  alt=""/>

            <div className="text-8xl font-bold text-orange-200">Hello!</div>
            <div className="text-4xl">Redirecting you...</div>
        </div>
    )
}