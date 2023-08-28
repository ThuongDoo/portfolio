import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'
import SliderComponent from '../components/SliderComponent'
function Projects() {
  return (
    <div className='projects' id='projects'>
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="projects-slider">
        <SliderComponent/>
        
      </div>
    </div>
  )
}

export default Projects