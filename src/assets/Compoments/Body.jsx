import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from './Navbar'
import Header from './Header';
import Cards from './Cards';

export default function Body(props) {

    return (
        <div className='w-screen h-screen overflow-x-hidden bg-[#202D36]'>
            <Navbar></Navbar>
            <Header></Header>
            <Cards></Cards>
        </div>
    )
}
