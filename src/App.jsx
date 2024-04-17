import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Metrics from './components/Metrics'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
    </>
  )
}

export default App