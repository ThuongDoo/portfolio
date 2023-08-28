import React from 'react'
import './Education.css'
import ExperienceCard from '../components/ExperienceCard'

function Education() {
  return (
    <section>

      <div className='education' id='education'>
        <h2 className="heading">My <span>Journey</span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <ExperienceCard fyear={2017} tyear={2018} title={"Master Degree - University"}
              description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ducimus libero nam ex molestiae fugiat aliquam optio incidunt eum animi cupiditate non, qui, natus minima. Porro odit culpa soluta commodi."}
              />
            </div>
            <div className="education-box">
              <ExperienceCard fyear={2017} tyear={2018} title={"Master Degree - University"}
              description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ducimus libero nam ex molestiae fugiat aliquam optio incidunt eum animi cupiditate non, qui, natus minima. Porro odit culpa soluta commodi."}
              />
            </div>
            <div className="education-box">
              <ExperienceCard fyear={2017} tyear={2018} title={"Master Degree - University"}
              description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ducimus libero nam ex molestiae fugiat aliquam optio incidunt eum animi cupiditate non, qui, natus minima. Porro odit culpa soluta commodi."}
              />
            </div>
          </div>
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <ExperienceCard fyear={2017} tyear={2018} title={"Master Degree - University"}
              description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ducimus libero nam ex molestiae fugiat aliquam optio incidunt eum animi cupiditate non, qui, natus minima. Porro odit culpa soluta commodi."}
              />
            </div>
            <div className="education-box">
              <ExperienceCard fyear={2017} tyear={2018} title={"Master Degree - University"}
              description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ducimus libero nam ex molestiae fugiat aliquam optio incidunt eum animi cupiditate non, qui, natus minima. Porro odit culpa soluta commodi."}
              />
            </div>
            <div className="education-box">
              <ExperienceCard fyear={2017} tyear={2018} title={"Master Degree - University"}
              description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ducimus libero nam ex molestiae fugiat aliquam optio incidunt eum animi cupiditate non, qui, natus minima. Porro odit culpa soluta commodi."}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education