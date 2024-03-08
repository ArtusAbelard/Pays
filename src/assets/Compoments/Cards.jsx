import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { createBrowserRouter , RouterProvider , Link } from 'react-router-dom'
import { MyContext } from './Body';



export default function Cards(props) {
    
    const [data,setdata,record,setrecord]=useContext(MyContext)
    
    // const Filter = (event) => {
    //     setrecord(data.filter(f => f.name.common.toLowerCase().includes(shear) ))
    // }
    
    return (
        <div className=' gap-16 flex flex-wrap items-center justify-center'>
            {
                data.map((Element,id)=>{
                    return(
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <Link to={`/Details/${id}`}><figure className='h-[350px] bg-slate-200'><img className='w-[320px] h-[245px] pt-5' src={data[id].flags.png} alt="Flag" /></figure></Link>
                            <div className="card-body bg-[#2B3743]">
                                <h2 className="card-title text-white text-2xl">{data[id].name.common}</h2>
                                <p className='text-white text-xl'>Population : {data[id].population}</p>
                                <p className='text-white text-xl'>Region : {data[id].region}</p>
                                <p className='text-white text-xl'>Capital : {data[id].capital}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

