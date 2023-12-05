import React from 'react'

const Contact = () => {
  return (
    <div name = "contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>

        <form action="" className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#4681f4] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot us an email</p>
            </div>
            <input type="text" className='bg-[#ccd6f6] p-2 outline-none' placeholder='Name' name = 'name' />
            <input type="email" className='my-4 p-2 bg-[#ccd6f6] outline-none' placeholder='Email' name = 'email' />
            <textarea className='bg-[#ccd6f6] p-2 outline-none' name="message" id="" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#4681f4] hover:border-[#4681f4] px-4 py-3 my-8 mx-auto flex items-center duration-300'>Message Us</button>
        </form>
    </div>
  )
}

export default Contact