import React from 'react'
import './Header.css'
function Header() {
  return (
    <section>

      <div className='header'>
        <a href="#logo" className='logo'>ThuongDo.</a>
        <nav className='navbar'>
          <a href="#home" className='active'>Home</a>
          <a href="#about">About</a>
          {/* <a href="#education">Education</a> */}
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </nav>
      </div>
    </section>
  )
}

export default Header