import React from 'react'
import aboutImg from '../assets/about.jpg'
import './About.css'
function About() {
  return (
    <div className='about' id='about'>
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-img">
        <img src={aboutImg} alt="" />
        <span className='circle-spin'></span>
      </div>
      <div className="about-content">
        <h3>Mobile Developer</h3>
        <p>Hello, I'm Do Manh Thuong, a final-year Information Technology student with a passion for mobile development. I've spent my academic journey exploring the world of mobile programming and UI design. Throughout my time, I've honed skills in Javascript, React, and React Native, creating user-friendly interfaces that engage and inspire. I'm eager to contribute my expertise to meaningful projects that make a difference. Let's connect and create together!</p>
        <div className="btn-box btns">
          <a href="#" className='btn'>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default About