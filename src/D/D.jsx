"use client"
import React from 'react'
import './D.css'
import { useSelector } from 'react-redux'


const D = () => {
  const loc = useSelector((state)=>{
    return state.appReducer.loc
  })
  return (
    <div>
      <h1 >D</h1>
      <h5>Location:{loc}</h5>
    </div>
  )
}

export default D
