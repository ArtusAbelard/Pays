import React from 'react'

export default function Navbar(props) {
    

    return (
        <div className='w-full flex justify-between h-[100px] bg-[#2B3743]'>
            <div className='h-full w-[30rem] flex items-center justify-center'>
                <h1 className='text-white font-semibold text-3xl'>Where in the world?</h1>
            </div>
            <div className='h-full w-[30rem] flex items-center justify-center'>
                <h5 className='ms-20 text-white text-2xl cursor-pointer'>Dark Mode</h5>
            </div>
        </div>
    )
}
