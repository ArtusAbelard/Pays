import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './Navbar'
import Header from './Header';
import Cards from './Cards';
import { ThemeContext } from '../../DataContext';
import { useContext } from 'react';

export const MyContext = React.createContext();

export default function Body(props) {
    const [shear, setshear] = useState("")
    const {data,darkMode,record,setrecord} = useContext(ThemeContext)
     
    useEffect(() => {
        setrecord(record)
    }, [])
    
  return (
        <div className={`w-screen h-screen overflow-x-hidden ${darkMode?"bg-[#202D36]":"bg-[#f5f5f5]"}`}>
            
            <Navbar></Navbar>
            <MyContext.Provider value={[data,shear,setshear]}>
                <Header></Header>
                <Cards></Cards>
            </MyContext.Provider>
        </div>
    )
}
