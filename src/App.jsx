import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Metrics from './components/Metrics'
import Hero from './components/Hero'
import Services from './components/Services'
import SubIndex from './components/SubIndex'
import SubPlans from './components/SubPlans'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SubIndex />
      <Metrics />
      <Services />
      <SubPlans />
    </>
  )
}

export default App