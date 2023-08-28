import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './SliderComponent.css'
import ProjectCard from "./ProjectCard";
import { projects } from "../data/data.js";

export default function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="slider">
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard 
            title={project.title}
            imgUrl={project.imgUrl}
            description={project.description} 
            technologies={project.technologies}
            link={project.link}
          />
        </div>
      ))}
    </Slider>
  );
}