import React from 'react';
import { Carousel } from "react-bootstrap"
import develop4good1 from "../Images/develop4good1.png"
import develop4good2 from "../Images/develop4good2.png"
import develop4good3 from "../Images/develop4good3.png"

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <div className="Projects-Card">
        <Carousel  id = "Carousel">
          <Carousel.Item >
            <img
              className="d-block w-100"
              src= {develop4good1}
              alt="First slide"
              
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={develop4good2}
              alt="First slide"
              
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={develop4good3}
              alt="First slide"
              
            />
          </Carousel.Item>
        </Carousel>
        <p className ="exp-parag">Develop4Good is created to bring Volunteer Web Developers and Non-profits together for a cause</p>
        <div className ="project-but">
          <a>More Info</a>
          <a href ="https://develop4good.com" target ="_blank">Live Site</a>
          <a href = "https://github.com/FethiEfe/develop4good" target ="_blank">Github</a>
        </div>
          
            
      </div>

      <div className="Projects-Card">
        <Carousel  id = "Carousel">
          <Carousel.Item >
            <img
              className="d-block w-100"
              src= {develop4good1}
              alt="First slide"
              
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={develop4good2}
              alt="First slide"
              
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={develop4good3}
              alt="First slide"
              
            />
          </Carousel.Item>
        </Carousel>
        <p className ="exp-parag">Develop4Good is created to bring Volunteer Web Developers and Non-profits together for a cause</p>
        <div className ="project-but">
          <a>More Info</a>
          <a href ="https://develop4good.com" target ="_blank">Live Site</a>
          <a href = "https://github.com/FethiEfe/develop4good" target ="_blank">Github</a>
        </div>
          
            
      </div>

      <div className="Projects-Card">
        <Carousel  id = "Carousel">
          <Carousel.Item >
            <img
              className="d-block w-100"
              src= {develop4good1}
              alt="First slide"
              
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={develop4good2}
              alt="First slide"
              
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={develop4good3}
              alt="First slide"
              
            />
          </Carousel.Item>
        </Carousel>
        <p className ="exp-parag">Develop4Good is created to bring Volunteer Web Developers and Non-profits together for a cause</p>
        <div className ="project-but">
          <a>More Info</a>
          <a href ="https://develop4good.com" target ="_blank">Live Site</a>
          <a href = "https://github.com/FethiEfe/develop4good" target ="_blank">Github</a>
        </div>
          
            
      </div>

      
          
            
      

    </div>
  );
}

export default Projects;