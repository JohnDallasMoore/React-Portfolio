import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


function App() {
  const [displayState, setDisplayState] = useState('')



  const DisplaySwitch = (state) => {
    switch (state) {
      case '':
        return <Home />
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
    </>
  )
}

export default App
