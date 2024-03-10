import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './Navbar'
import { useParams,createBrowserRouter,RouterProvider, } from 'react-router-dom'
import { useContext } from 'react';
import { MyContext } from './Body';
import { ThemeContext } from '../../DataContext'
import { Link } from 'react-router-dom';

export default function Details(props) {

    const {id} = useParams()
    const {data,darkMode} = useContext(ThemeContext)
    const curencies = Object.values(data[id].currencies)
    const native = Object.values(data[id].name.nativeName)
    let idBorders = []
    
    function cible(params) {
        for (let index = 0; index < data.length; index++) {
            for (let i = 0; i < data[id].borders.length; i++) {
                if (data[index].fifa==data[id].borders[i]) {
                    //     setidBorders([
                    //         ...idBorders,
                    //         {id: data[id].borders[i]++,name:index}
                    // ])
                    idBorders.push(index)  
                }  
            }
        }
    }
    if (data[id].borders) {
        cible()   
    }
    return (
        <div className={`w-screen h-screen overflow-hidden bg-[#202D36] ${darkMode?"text-white bg-[#2B3743]":"text-black bg-[#f5f5f5]"}`}>
            <Navbar></Navbar>
            <div className='w-full flex items-center ps-28 h-[200px]'>
            <Link to={`/Pays/`}><button className={`btn mt-5  hover:text-black text-xl t w-[150px] ${darkMode?"text-white bg-[#2B3743]":"text-black bg-white"}`}>Back</button></Link>
            </div>
            <div className='w-full h-[35rem] flex'>
                <div className='h-full w-1/2 flex justify-center items-center'>
                    <img className='h-[31rem] w-[45rem]' src={data[id].flags.png} alt="" />
                </div>
                <div className='h-full w-1/2 flex flex-col'>
                    <h1 className={` h-[8rem] pt-16 text-3xl font-bold ps-6 ${darkMode?"text-white ":"text-black "}`}>{data[id].name.common}</h1>   
                    <div className=' w-full flex h-2/5'>
                        <div className='h-full w-1/3 '>
                            <ul className={`ps-6 gap-3  h-full w-full flex flex-col text-xl justify-center items-start ${darkMode?"text-white ":"text-black "}`}>
                                <li>Native Name : {native[0].official}</li>
                                <li>Population : {data[id].population}</li>
                                <li>Region : {data[id].region}</li>
                                <li>Sub Region : {data[id].subregion}</li>
                                <li>Capital : {data[id].capital}</li>
                            </ul>
                        </div>
                        <div className='h-full w-1/2'>
                            <ul className={`gap-3  h-full w-full flex flex-col text-xl justify-start pt-5 items-start ps-28 ${darkMode?"text-white ":"text-black "}`}>
                                <li>Top Level Domain : {data[id].tld[0]}</li>
                                <li>Currencies : {curencies[0].name}</li>
                                <li className='flex'>Languages : {Object.values(data[id].languages).map((Element,id)=>{
                                    return(
                                        <p key={id}> &nbsp;{ Element},</p>
                                    )
                                })}</li>
                            </ul>
                        </div>
                    </div>
                    {
                        data[id].borders?
                        <div className='h-[10rem]  flex items-center ps-6'>
                            <h5 className={`text-xl`}>Border Countries :</h5>
                            <div className='ms-8 gap-5 flex justify-around  flex-wrap w-[420px] '>
                                {
                                    idBorders.map((Element,Index)=>{
                                        return(
                                            <Link key={Index}  to={`/Details/${Element}`}><button key={Index} className={`btn h-[35px] min-h-0 w-[120px] ${darkMode?"text-white bg-[#2B3743] hover:text-black":"text-black bg-white "}`}>{data[Element].name.common}</button></Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :""
                    }
                </div>
            </div>  
        </div>
    )   
}

