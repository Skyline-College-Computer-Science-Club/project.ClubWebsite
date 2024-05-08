'use client'

import { Element } from 'react-scroll'

export default function History(): React.ReactNode {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-300'>
            <Element name='history' />
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#4681f4]'>
                            Our History
                        </p>
                    </div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Welcome! Take a look around.</p>
                    </div>

                    <p className='text-[16px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.Harum natus iste ipsa molestias eum beatae illo
                        culpa ipsum voluptates, maxime optio aperiam. Et
                        exercitationem magni suscipit! Recusandae perferendis
                        impedit reiciendis!
                    </p>
                </div>
            </div>
        </div>
    )
}
