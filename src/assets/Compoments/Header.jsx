import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { MyContext } from './Body';
import { ThemeContext } from '../../DataContext';

export default function Header(props) {
    
    const [data,shear,setshear]=useContext(MyContext)
    const {darkMode,setdarkMode} = useContext(ThemeContext)
    
    return (
        <div className='w-full h-[200px] flex justify-between '>
                <div className=' ms-12 w-[40rem] flex justify-center items-center'>
                    <input type="text" placeholder="Shear for country" onChange={(e)=>{setshear(e.target.value)}} className={` ms-12 text-lg h-[4rem] input input-bordered w-full  ${darkMode?"text-white bg-[#2B3743]":"text-black bg-white"}`} />
                </div>
                <div className=' pe-14 w-[27rem] flex justify-center items-center'>
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className={`btn ps-5 m-1 h-[4rem] text-lg w-[16rem]  hover:text-black  ${darkMode?"text-white bg-[#2B3743]":"text-black bg-white"}`}>Filter by Region</div>
                            <ul tabIndex={0} className={` w-[16.5rem] dropdown-content z-[1] menu p-2 shadow  rounded-box ${darkMode?"text-white bg-[#2B3743]":"text-black bg-white"}`}>
                                <li><a>Africa</a></li>
                                <li><a>America</a></li>
                                <li><a>Asia</a></li>
                                <li><a>Europe</a></li>
                                <li><a>Oceania</a></li>
                            </ul>
                    </div>
                </div>
        </div>
    )
}
