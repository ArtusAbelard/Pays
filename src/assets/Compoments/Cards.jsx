import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { createBrowserRouter , RouterProvider , Link } from 'react-router-dom'
import { MyContext } from './Body';
import { ThemeContext } from '../../DataContext';



export default function Cards(props) {
    
    const [data,shear]=useContext(MyContext)
    const {darkMode,record,setrecord,filterbtn, setfilterbtn} = useContext(ThemeContext)
    // const [record, setrecord] = useState(data)
    // console.log(shear);
    useEffect(() => {
        // console.log(record);
        // setrecord(data)
        Filter()
        
        
        // console.log(data);
    }, [shear])
    useEffect(() => {
        // console.log(record);
        // setrecord(data)
        Filterbtn()
        
        
        // console.log(data);
    }, [filterbtn])
    
    const Filter = (event) => {
        setrecord(data.filter(f => f.name.common.toLowerCase().includes(shear) ))
        
    }
    const Filterbtn = (event) => {
        
        setrecord(data.filter((data) => data.region.toLowerCase()==filterbtn))
    }
    // console.log(data[1].region);
    console.log(filterbtn);
    

    // function ciblage(params) {
    //     for (let index = 0; index < data.length; index++) {
    //         for (let i = 0; i < record.length; i++) {
    //             if (data[index].fifa==data[i].borders[i]) {
                    
    //                console.log(index);
                    
    //             }  
    //         }
    //     }
    // }
    
    return (
        <div className='gap-16 flex flex-wrap items-center justify-center'>
            {
                record.map((Element,id)=>{
                    return(
                        <div key={id} className="card w-96  shadow-xl rounded-xl overflow-hidden">
                            <Link to={`/Details/${id}`}><figure className='h-[15rem] '><img className='w-full h-[15rem] pt-5' src={record[id].flags.png} alt="Flag" /></figure></Link>
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
// {
//     record.map((Element,id)=>{
//         return(
//             <div key={id} className="card w-96  shadow-xl rounded-xl overflow-hidden">
//                 <Link to={`/Details/${id}`}><figure className='h-[15rem] '><img className='w-full h-[15rem] pt-5' src={data[id].flags.png} alt="Flag" /></figure></Link>
//                 <div className={`card-body ${darkMode?"text-white bg-[#2B3743]":"text-black bg-[#FFFFFF]"}`}>
//                     <h2 className="card-title text-2xl">{data[id].name.common}</h2>
//                     <p className=' text-xl'>Population : {data[id].population}</p>
//                     <p className=' text-xl'>Region : {data[id].region}</p>
//                     <p className=' text-xl'>Capital : {data[id].capital}</p>
//                 </div>
//             </div>
//         )
//     })
// }

