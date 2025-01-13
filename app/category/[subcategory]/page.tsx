"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {subcategory} = useParams()
  return (
    <div>{subcategory}</div>
  )
}

export default page