import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectScreen() {
  const {title} = useParams();
  return (
    <div>ProjectScreen {title}</div>
  )
}

export default ProjectScreen