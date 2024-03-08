import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './Navbar'
import Header from './Header';
import Cards from './Cards';
import Details from './Details';

export const MyContext = React.createContext();

export default function Body(props) {
    const [shear, setshear] = useState("")
    const [data, setData] = useState([]);
    const [record, setrecord] = useState(data)
      
    console.log(shear);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
          .then((response) => response.json())
          .then((response) => {
            setData(response)
        })
          .catch((error) => console.error(error))
      }, [])
    
    return (
        <div className='w-screen h-screen overflow-x-hidden bg-[#202D36]'>
            
            <Navbar></Navbar>
            <MyContext.Provider value={[data,shear,setshear,record,setrecord]}>
                <Header></Header>
                <Cards></Cards>
            </MyContext.Provider>
            
        </div>
    )
}
