import React from 'react'
import { ThemeContext } from '../../DataContext';
import { useContext } from 'react';

export default function Navbar(props) {
    const {darkMode,setdarkMode} = useContext(ThemeContext)

    return (
        <div className={`w-full flex justify-between h-[100px] shadow-lg ${darkMode?"bg-[#2B3743]":"bg-[#FFFFFF]"}`} >
            <div className='h-full w-[30rem] flex items-center justify-center '>
                <h1 className={` font-semibold text-3xl ${darkMode?"text-white":"text-black"}`}>Where in the world?</h1>
            </div>
            <div className='h-full w-[30rem] flex items-center justify-center'>
                {
                    darkMode?<i class="h-7 w-7 fa-solid text-xl text-white ms-20 fa-sun "></i>:<i class="h-7 w-7 fa-solid ms-20 text-xl fa-moon"></i>
                }
                <h5 onClick={()=>{darkMode==true?setdarkMode(false):setdarkMode(true)}} className={`flex items-center justify-center text-center text-2xl cursor-pointer ${darkMode?"text-white":"text-black"}`}>Dark Mode</h5>
            </div>
        </div>
    )
}
