import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar'
import Metrics from './components/Metrics'
import Hero from './components/Hero'
import Services from './components/Services'
import SubIndex from './components/SubIndex'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Homepage from './components/pages/Homepage'

const App = () => {
  return (
    
    <Router>

      <Navbar />
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<Metrics />} ></Route>



        </Routes>
    </Router>
  )
}

export default App