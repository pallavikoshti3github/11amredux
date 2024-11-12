"use client"
import React, { useState } from 'react'
import './B.css'

const B = () => {
    const [loc,setLoc] = useState("");

    const handleClick =() =>{
        alert(loc);
    }

  return (
    <div>
      <h1>B</h1>
      <p>
        Location:<input onChange={(eve)=>{
            setLoc(eve.target.value)
        }}/>
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default B
