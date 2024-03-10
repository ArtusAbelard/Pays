import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './Navbar'
import Header from './Header';
import Cards from './Cards';
import Details from './Details';
import { ThemeContext } from '../../DataContext';
import { useContext } from 'react';

export const MyContext = React.createContext();

export default function Body(props) {
    const [shear, setshear] = useState("")
    // const [data, setData] = useState([]);
    // const [record, setrecord] = useState(data)
    const {data,darkMode,setdarkMode} = useContext(ThemeContext)
    // console.log(darkMode);
     
    
    // console.log(shear);
    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all')
    //       .then((response) => response.json())
    //       .then((response) => {
    //         setData(response)
    //     })
    //       .catch((error) => console.error(error))
    //   }, [])
    
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
