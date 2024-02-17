import React from 'react'
import Home from '../Landing/Home'
import About from '../Landing/About'
import Product from '../Landing/Product'

import { Route, Routes } from 'react-router-dom'

function Index() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default Index