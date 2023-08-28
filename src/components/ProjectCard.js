import React from 'react'
import './ProjectCard.css'

function ProjectCard({title, imgUrl, description, technologies, link}) {
  return (
    // <Link to={`/project/${title}`}>
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='projectcard'>
        <h2 className='projectcard-title'>{title}</h2>
        <div className="projectcard-container">
          <img src={imgUrl} alt="" style={{width:200, height:200}}/>
          <div className="description">
            <div>
              <h2 className="description-label">Description: </h2>
              <p>{description}</p>
            </div>
            <div>
              <h2 className="description-label">Technologies: </h2>
              {technologies.map((item, index) => (
                <h5 key={index}>{item}</h5>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </a>
      
    // </Link>
    

  )
}

export default ProjectCard