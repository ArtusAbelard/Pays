import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import {Link } from 'react-router-dom'
import { MyContext } from './Body';
import { ThemeContext } from '../../DataContext';

export default function Cards(props) {
    
    const [data,shear]=useContext(MyContext)
    const {darkMode,record,setrecord,filterbtn} = useContext(ThemeContext)
    
    useEffect(() => {
        Filter()
    }, [shear])
    useEffect(() => {
        Filterbtn()
    }, [filterbtn])
    
    const Filter = (event) => {
        setrecord(data.filter(f => f.name.common.toLowerCase().includes(shear) ))
        
    }
    const Filterbtn = (event) => {
        setrecord(data.filter((d) => d.region.toLowerCase()===filterbtn))
        
    }
    const chercherIndex = (element) => {
        const i = data.findIndex((x) => x.name.common === element.name.common);
        return i;
    };
    
    return (
        <div className='gap-16 flex flex-wrap items-center justify-center'>
            {
                record.map((Element,id)=>{
                    return(
                        <div key={id} className="card w-96  shadow-xl rounded-xl overflow-hidden">
                            <Link to={`/Details/${chercherIndex(Element)}`}><figure className='h-[15rem] '><img className='w-full h-[15rem] pt-5' src={record[id].flags.png} alt="Flag" /></figure></Link>
                            <div className={`card-body ${darkMode?"text-white bg-[#2B3743]":"text-black bg-[#FFFFFF]"}`}>
                                <h2 className="card-title text-2xl">{record[id].name.common}</h2>
                                <p className=' text-xl'>Population : {record[id].population}</p>
                                <p className=' text-xl'>Region : {record[id].region}</p>
                                <p className=' text-xl'>Capital : {record[id].capital}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


