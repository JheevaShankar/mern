import React from 'react'
import User from './components/User'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import State from './hook/State'

const App = () => {
  return (
    <>
      <div style={navStyle.container}>
        <nav style={navStyle.nav}>
          <Link style={navStyle.link} to="/">Home</Link>
          <Link style={navStyle.link} to="/about">About</Link>
          <Link style={navStyle.link} to="/contact">Contact</Link>
          <Link style={navStyle.link} to="/state">State</Link>
        </nav>
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/state' element={<State />} />
      </Routes>

      <User name="JheevaShankar" department="AIML Department"
      skills = {["HTML", "CSS", "JS"]} />

    </>
  )
}
const navStyle = {
  container: {
    backgroundColor: '#333',
    padding: '15px',
    marginBottom: '20px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
  }
}

export default App