import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/HomePage'

function PrivateRoutes() {
  return (
    <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='*' element={ <Navigate to='/' replace /> } />
    </Routes>
  )
}

export default PrivateRoutes