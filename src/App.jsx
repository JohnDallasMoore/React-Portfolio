import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const [displayState, setDisplayState] = useState('')



  const DisplaySwitch = (state) => {
    switch (state) {
      case '':
        return <Home setDisplayState = { setDisplayState } />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }


  return (
    <>
      <Navbar setDisplayState = { setDisplayState } />
      {DisplaySwitch(displayState)}
      <Footer setDisplayState = { setDisplayState } />
    </>
  )
}

export default App
