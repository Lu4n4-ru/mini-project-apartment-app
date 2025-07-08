import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <Navbar />
      <h1>Vite + React</h1>
      <Footer />
    </>
  )
}

export default App;
