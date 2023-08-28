import React from 'react'
import 'boxicons/css/boxicons.min.css'
import './ExperienceCard.css'
function ExperienceCard({fyear, tyear, title, description}) {
  return (
    <div className='experience-card'>
      <div className=''><i className='bx bxs-calendar' ></i> {fyear} - {tyear} </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceCard