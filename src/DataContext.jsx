import React, {createContext, useState, useEffect} from 'react'  
const ThemeContext = createContext(); 
const DataContextone = createContext();  

const ThemeProvider = ( { children }) =>{      
       
    const [data, setdata] = useState([]);
    const [darkMode, setdarkMode] = useState(false)    
    const [record, setrecord] = useState([]) 
    
    useEffect(() => { 
        fetch('https://restcountries.com/v3.1/all')         
        .then((res) => {           
        return res.json();         
        })         
        .then((data) => {                    
        setdata(data)
        setrecord(data);        
        });       }, []);     
                 
     
     return (                  
    <ThemeContext.Provider value={{data,darkMode,setdarkMode,record,setrecord}} >             
        {children}          
    </ThemeContext.Provider>)}  
    
    export {ThemeProvider, ThemeContext, DataContextone}