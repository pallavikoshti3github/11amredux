"use client"
import React, { useState } from 'react'
import './B.css'
import { useDispatch } from 'react-redux'
useDispatch

const B = () => {
    const [loc,setLoc] = useState("");
    const dispatch = useDispatch();
    const handleClick =() =>{
      dispatch({
        type:"LOC_UPDATE",
        loc:loc
      });
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
