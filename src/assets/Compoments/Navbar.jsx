import React from 'react'
import { ThemeContext } from '../../DataContext';
import { useContext } from 'react';


export default function Navbar(props) {
    const {darkMode,setdarkMode} = useContext(ThemeContext)

    return (
        <div className={`w-full flex justify-between h-[100px] shadow-lg ${darkMode?"bg-[#2B3743]":"bg-[#FFFFFF]"}`} >
            <div className='h-full w-[30rem] flex items-center justify-center '>
                <h1 className={`text-white font-semibold text-3xl ${darkMode?"text-white":"text-black"}`}>Where in the world?</h1>
            </div>
            <div className='h-full w-[30rem] flex items-center justify-center'>
                <h5 onClick={()=>{darkMode==true?setdarkMode(false):setdarkMode(true)}} className={`ms-20 text-2xl cursor-pointer ${darkMode?"text-white":"text-black"}`}>Dark Mode</h5>
            </div>
        </div>
    )
}
