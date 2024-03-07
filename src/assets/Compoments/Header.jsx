import React from 'react'
import { useState } from 'react'

export default function Header(props) {
    const [shear, setshear] = useState("")

    return (
        <div className='w-full h-[200px] flex justify-between '>
                <div className=' ms-12 w-[40rem] flex justify-center items-center'>
                    <input type="text" placeholder="Shear for country" onChange={(e)=>{setshear(e.target.value)}} className="bg-[#2B3743] ms-12 text-lg h-[4rem] input input-bordered w-full text-white" />
                </div>
                <div className=' pe-14 w-[27rem] flex justify-center items-center'>
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn ps-5 m-1 h-[4rem] text-lg w-[16rem] hover:text-black bg-[#2B3743] text-white">Filter by Region</div>
                            <ul tabIndex={0} className="bg-[#2B3743] w-[16.5rem] dropdown-content z-[1] menu p-2 shadow  rounded-box ">
                                <li className='text-white'><a>Africa</a></li>
                                <li className='text-white'><a>America</a></li>
                                <li className='text-white'><a>Asia</a></li>
                                <li className='text-white'><a>Europe</a></li>
                                <li className='text-white'><a>Oceania</a></li>
                            </ul>
                    </div>
                </div>
        </div>
    )
}
