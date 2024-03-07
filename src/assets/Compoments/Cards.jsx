import React from 'react'
import { useState,useEffect } from 'react';
import { createBrowserRouter , RouterProvider , Link } from 'react-router-dom'

export default function Cards(props) {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
          .then((response) => response.json())
          .then((response) => setData(response))
          .catch((error) => console.error(error))
      }, [])
    console.log(data[0]);
    
    return (
        <div className=' gap-16 flex flex-wrap items-center justify-center'>
            {
                data.map((Element,id)=>{
                    return(
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <Link><figure className='h-[350px]'><img className='w-[300px] h-[300px] pt-5' src={data[id].flags.png} alt="Flag" /></figure></Link>
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

