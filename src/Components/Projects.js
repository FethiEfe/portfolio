import React from 'react';
import { Carousel, Modal, Button } from "react-bootstrap"
import develop4good1 from "../Images/develop4good1.png"
import develop4good2 from "../Images/develop4good2.png"
import develop4good3 from "../Images/develop4good3.png"
import tuneflix1 from "../Images/tuneflix1.jpg"
import tuneflix2 from "../Images/tuneflix2.jpg"
import tuneflix3 from "../Images/tuneflix3.jpg"

class Projects extends React.Component {
  constructor() {
    super(); {
      this.state = {
        show: false,
      }
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
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
                  src={develop4good1}
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
            <p className="exp-parag">Develop4Good is created to bring Volunteer Web Developers and Non-profits together for a cause</p>
            <div className="project-but">
              {/* <a>More Info</a> */}
              <a variant="primary" onClick={this.handleShow}>
                More Info
            </a>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Develop 4  Good</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>React| Redux | Express | Bootstrap | Express | NodeMailer | Stripe | AWS S3 | Postgresql</p>
                  <p>One of the reasons I want to be a web developer is impact. That's why I created a website that brings developers and Non-profits together. Develop 4 Good is a great opportunity to gain experience for developers and free platform to get help for charity organizations</p>
                  <ul>
                    <li>Used React to create components viewed through different browser routes, made responsive with CSS</li>
                    <li>Integrated axios calls to backend server to load and update data from PostgresSQL database</li>
                    <li>Integrated Redux to hold and manage state</li>
                    <li>Hit RESTful API's to retrieve and display data</li>

                  </ul>
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer> */}
              </Modal>
              <a href="https://develop4good.com" target="_blank">Live Site</a>
              <a href="https://github.com/FethiEfe/develop4good" target="_blank">Github</a>
            </div>


          </div>

          <div className="Projects-Card">
            <Carousel id="Carousel">
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src={tuneflix1}
                  alt="First slide"

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={tuneflix2}
                  alt="First slide"

                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={tuneflix3}
                  alt="First slide"

                />
              </Carousel.Item>
            </Carousel>
            <p className="exp-parag">Tuneflix lets you find the soundtrack to any movie or TV series</p>
            <div className="project-but">
              {/* <a>More Info</a> */}
              <a variant="primary" onClick={this.handleShow}>
                More Info
            </a>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>TuneFlix</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>React | Redux | NodeJS | Express | SASS | JEST | CYPRESS</p>

                  <ul>
                    <li>TuneFlix is a fully responsive application that lets you find the soundtrack to any movie or TV series by simply typing in the name</li>
                    <li>Tuneflix recognizes music in microphone records and in audio files.</li>
                    <li>Combined multiple API's (IMDB, Tunefind, Audd) to ensure a consistent user experience.</li>
                    <li>Implemented Redux for state management throughout the application.</li>
                    <li>Integrated Redux to hold and manage state</li>
                    <li>Wrote unit and end-to-end tests to run quality assurance on the entire application.</li>

                  </ul>
                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer> */}
              </Modal>
              <a href="https://tuneflix.fun" target="_blank">Live Site</a>
              <a href="https://github.com/tuneflix/tuneflix" target="_blank">Github</a>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default Projects;