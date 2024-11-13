"use client"
import React from 'react'
import './C.css'
import { useSelector } from 'react-redux'


const C = () => {
   const name = useSelector((state)=>{
        return state.appReducer.name
    })
  return (
    <div>
      <h1>C</h1>
      <h5>Name:{name}</h5>
    </div>
  )
}

export default C
