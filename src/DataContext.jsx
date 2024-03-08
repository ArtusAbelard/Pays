import React, {createContext, useState, useEffect} from 'react'  
const ThemeContext = createContext(); 
const DataContextone = createContext();  

const ThemeProvider = ( { children }) =>{      
       
    const [data, setdata] = useState([]);     
    
    useEffect(() => { 
        fetch('https://restcountries.com/v3.1/all')         
        .then((res) => {           
        return res.json();         
        })         
        .then((data) => {           
        // console.log(data);           
        setdata(data);        
        });       }, []);     
     //   console.log(flagsGallery2);              
     
     return (                  
    <ThemeContext.Provider value={{data}} >             
        {children}          
    </ThemeContext.Provider>)}  
    
    export {ThemeProvider, ThemeContext, DataContextone}