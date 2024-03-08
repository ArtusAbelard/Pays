import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './Navbar'
import { useParams,createBrowserRouter,RouterProvider, } from 'react-router-dom'
import { useContext } from 'react';
import { MyContext } from './Body';
import { ThemeContext } from '../../DataContext'

export default function Details(props) {

    const {id} = useParams()
    const {data} = useContext(ThemeContext)
    console.log(Object.values(data[0].languages));
    
    return (
        <div className='w-screen h-screen overflow-hidden bg-[#202D36]'>
            <Navbar></Navbar>
            <div className='w-full  h-[200px]'></div>
            <div className='w-full h-[35rem] flex'>
                <div className='h-full w-1/2 flex justify-center items-center'>
                    <img className='h-[30rem] w-[45rem]' src={data[id].flags.png} alt="" />
                </div>
                <div className='h-full w-1/2 flex flex-col'>
                    <h1 className='text-white h-[8rem] pt-16 text-3xl font-bold ps-6'>{data[id].name.common}</h1>   
                    <div className=' w-full flex h-2/5'>
                        <div className='h-full w-1/3 '>
                            <ul className='ps-6 gap-3 text-white h-full w-full flex flex-col text-xl justify-center items-start'>
                                <li>Native Name : {data[id].name.official}</li>
                                <li>Population : {data[id].population}</li>
                                <li>Region : {data[id].region}</li>
                                <li>Sub Region :</li>
                                <li>Capital : {data[id].capital}</li>
                            </ul>
                        </div>
                        <div className='h-full w-1/2'>
                            <ul className='ps-6 gap-3 text-white h-full w-full flex flex-col text-xl justify-start pt-5 items-start ps-28'>
                                <li>Top Level Domain : {data[id].tld[0]}</li>
                                <li>Currencies : {""}</li>
                                
                                <li className='flex'>Languages : {Object.values(data[id].languages).map((Element,id)=>{
                                    return(
                                        <li> &nbsp;{ Element},</li>
                                    )
                                })}</li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className='h-[10rem] bg-slate-400'></div>
                </div>
            </div>  
        </div>
    )
}
