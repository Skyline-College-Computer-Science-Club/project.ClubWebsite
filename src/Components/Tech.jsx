import React from 'react'
import CoderCat from '../assets/CoderCat.png'

const Tech = () => {
  return (
    <div name='tech' className = 'w-full h-screen bg-[#0a192f] text-gray-300'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#4681f4] '>Technologies</p>
                <p className='py-4'>Technologies we've worked with</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#040c16]'>
                    <img className = "w-20 mx-auto" src={CoderCat} alt="Meow" />
                    <p className='my-4'>Modify</p>
                </div>

                <div className='shadow-md shadow-[#040c16]'>
                    <img className = "w-20 mx-auto" src={CoderCat} alt="Meow" />
                    <p className='my-4'>Modify</p>
                </div>

                <div className='shadow-md shadow-[#040c16]'>
                    <img className = "w-20 mx-auto" src={CoderCat} alt="Meow" />
                    <p className='my-4'>Modify</p>
                </div>

                <div className='shadow-md shadow-[#040c16]'>
                    <img className = "w-20 mx-auto" src={CoderCat} alt="Meow" />
                    <p className='my-4'>Modify</p>
                </div>

                <div className='shadow-md shadow-[#040c16]'>
                    <img className = "w-20 mx-auto" src={CoderCat} alt="Meow" />
                    <p className='my-4'>Modify</p>
                </div>

                <div className='shadow-md shadow-[#040c16]'>
                    <img className = "w-20 mx-auto" src={CoderCat} alt="Meow" />
                    <p className='my-4'>Modify</p>
                </div>

                <div className='shadow-md shadow-[#040c16]'>
                    <img className = "w-20 mx-auto" src={CoderCat} alt="Meow" />
                    <p className='my-4'>Modify</p>
                </div>

                <div className='shadow-md shadow-[#040c16]'>
                    <img className = "w-20 mx-auto" src={CoderCat} alt="Meow" />
                    <p className='my-4'>Modify</p>
                </div>

            </div>
        </div>



    </div>
  )
}

export default Tech