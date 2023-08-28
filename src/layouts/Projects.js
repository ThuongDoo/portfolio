import React from 'react'
import './styles.css'
import SliderComponent from '../components/SliderComponent'
function Projects() {
  return (
    <div className='projects section' id='projects'>
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="projects-slider">
        <SliderComponent/>
        
      </div>
    </div>
  )
}

export default Projects