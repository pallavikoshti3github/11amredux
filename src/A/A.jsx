"use client"
import React, { useState } from 'react'
import './A.css'

const A = () => {

    const [name,setName] = useState("");

    const handleChange = (eve) =>{
        const name = eve.target.value;
        setName(name);
    }

    const handleClick = (eve)=>{
        alert(name)
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
