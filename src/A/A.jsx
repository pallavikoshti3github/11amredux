"use client"
import React, { useState } from 'react'
import './A.css'
import { useDispatch } from 'react-redux'


const A = () => {

    const [name,setName] = useState("");
    const dispatch = useDispatch()
    const handleChange = (eve) =>{
        const name = eve.target.value;
        setName(name);
    }

    const handleClick = (eve)=>{
        dispatch({type:"NAME_UPDATE",name})
    }   


  return (
    <div>
      <h1>A</h1>
      <p>
        Name: <input onChange={handleChange}  />
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default A
