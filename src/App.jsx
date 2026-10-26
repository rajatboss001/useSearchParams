import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Blogdetails from './pages/Blogdetails'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blogdetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
