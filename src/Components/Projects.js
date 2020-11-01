import React from 'react';
import { Carousel, Modal, Button } from "react-bootstrap"
import loma1 from "../Images/loma1.png"
import loma2 from "../Images/loma2.png"
import loma3 from "../Images/loma3.png"
import aviva1 from "../Images/aviva1.png"
import aviva2 from "../Images/aviva2.png"

class Projects extends React.Component {
  constructor() {
    super(); {
      this.state = {
        loma: false,
        aviva:false
      }
    }
  }

  handleClose = (type) => {
    if(type ==="aviva"){
      this.setState({ aviva: false });
    }else{
      this.setState({ loma: false });
    }
  }

  handleShow = (e) => {
    this.setState({ [e.target.id]: true });
  }

  render() {
    return (
      <div className="projects-section" id="projects">
        <h1 id="my-projects">My Projects</h1>
        <div className="all-Projects-Card">
          <div className="Projects-Card">
            <Carousel id="Carousel">
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={loma1}
                  alt="First slide"

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={loma2}
                  alt="First slide"

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={loma3}
                  alt="First slide"

                />
              </Carousel.Item>
            </Carousel>
            <p className="exp-parag">Loma Sierra LLC is family-owned home textile business</p>
            <div className="project-but">
              <a variant="primary" id="loma" onClick={this.handleShow}>
                More Info
            </a>

              <Modal show={this.state.loma} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Loma Sierra LLC</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>JavaScript | React| NodeJS | Express | Bootstrap | NodeMailer </p>
                  <ul>
                    <li>Built a website for small family-owned company that sells home textile products on Amazon, Ebay and Etsy</li>
                    <li>Applied Bootstrap for developing responsive and mobile-first website and CSS keyframes for animation</li>
                    <li>Used React Router to keep UI in sync with the URL</li>
                  </ul>
                </Modal.Body>
              </Modal>
              <a href="https://lomasierra.com" target="_blank">Live Site</a>
            </div>


          </div>

          <div className="Projects-Card">
            <Carousel id="Carousel">
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={aviva1}
                  alt="First slide"

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={aviva2}
                  alt="First slide"

                />
              </Carousel.Item>
            </Carousel>
            <p className="exp-parag">Aviva San Antonio offers t-shirts, hoodies, raglans, heat transfer vinyl, vinyl cutting equipment, and heat presses at wholesale prices to the public.</p>
            <div className="project-but">
              {/* <a>More Info</a> */}
              <a variant="primary" id="aviva" onClick={this.handleShow}>
                More Info
            </a>

              <Modal show={this.state.aviva} onHide={() => this.handleClose("aviva")}>
                <Modal.Header closeButton>
                  <Modal.Title>Aviva San Antonio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Shopify</p>

                  <ul>
                    <li>Aviva San Antonio is powered by Shopify</li>
                  </ul>
                </Modal.Body>
              </Modal>
              <a href="https://www.avivasanantonio.com" target="_blank">Live Site</a>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default Projects;