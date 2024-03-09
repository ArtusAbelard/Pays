import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { createBrowserRouter , RouterProvider , Link } from 'react-router-dom'
import { MyContext } from './Body';
import { ThemeContext } from '../../DataContext';



export default function Cards(props) {
    
    const [data,setdata,record,setrecord]=useContext(MyContext)
    const {darkMode,setdarkMode} = useContext(ThemeContext)
    // const Filter = (event) => {
    //     setrecord(data.filter(f => f.name.common.toLowerCase().includes(shear) ))
    // }
    
    return (
        <div className=' gap-16 flex flex-wrap items-center justify-center'>
            {
                data.map((Element,id)=>{
                    return(
                        <div className="card w-96  shadow-xl rounded-xl overflow-hidden">
                            <Link to={`/Details/${id}`}><figure className='h-[15rem] bg-slate-200'><img className='w-full h-[18rem] pt-5' src={data[id].flags.png} alt="Flag" /></figure></Link>
                            <div className={`card-body ${darkMode?"text-white bg-[#2B3743]":"text-black bg-[#FFFFFF]"}`}>
                                <h2 className="card-title text-2xl">{data[id].name.common}</h2>
                                <p className=' text-xl'>Population : {data[id].population}</p>
                                <p className=' text-xl'>Region : {data[id].region}</p>
                                <p className=' text-xl'>Capital : {data[id].capital}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

