import React from 'react'
import Header from '../layouts/Header'
import Home from '../layouts/Home'
import About from '../layouts/About'
import Education from '../layouts/Education'
import Projects from '../layouts/Projects'
import Contact from '../layouts/Contact'

function HomeScreen() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      {/* <Education/> */}
      <Projects/>
      <Contact/>
    </div>
  )
}

export default HomeScreen