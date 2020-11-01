import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import js from "../Images/js.png"
import css from "../Images/css.png"
import html from "../Images/html.png"
import react from "../Images/react.png"
import redux from "../Images/redux.png"
import express from "../Images/express.png"
import postgresql from "../Images/postgresql.png"
import node from "../Images/node.png"
import bootstrap from "../Images/bootstrap.png"
import webpack from "../Images/webpack.png"
import babel from "../Images/babel.png"
import mongo from "../Images/mongo.png"
import jest from "../Images/jest.png"
import enzyme from "../Images/enzyme.png"
import cypress from "../Images/cypress.png"
import mocha from "../Images/mocha.png"

function Home() {
  return (
    <div className="home-section" id="home">
      <div className="intro">

        <h1>Hello! I'm Fethi</h1>
        <div></div>
        <p id="title"></p>

      </div>
      <div className="container">

        {/* First row */}
        <div className="row">

          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={js} style={{width:"5vw"}}/>
            <h6 className="logo-text">JavaScript</h6>
          </div>

          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={html} style={{width:"5vw"}}/>
            <h6 className="logo-text">Html5</h6>
          </div>
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={css} style={{width:"5vw"}}/>
            <h6 className="logo-text">Css3</h6>
          </div>
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={bootstrap} style={{width:"5vw"}}/>
            <h6 className="logo-text">Bootstrap</h6>
          </div>

        </div>

        {/* Second row */}
        <div className="row">

          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={react} style={{width:"5vw"}}/>
            <h6 className="logo-text">ReactJS</h6>
          </div>

           <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={redux} style={{width:"5vw"}}/>
            <h6 className="logo-text">Redux</h6>
          </div>

          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={webpack} style={{width:"5vw"}}/>
            <h6 className="logo-text">Webpack</h6>
          </div>
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={babel} style={{width:"8vw"}}/>
            <h6 className="logo-text">Babel</h6>
          </div>

        </div>  
          {/* Third row */}
        <div className="row">
      
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end " >
            <img src={node} style={{width:"5vw"}}/>
            <h6 className="logo-text">NodeJS</h6>
          </div>
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={express} style={{width:"5vw"}}/>
            <h6 className="logo-text">Expresss</h6>
          </div>
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={postgresql} style={{width:"5vw"}}/>
            <h6 className="logo-text">PostgreSQL</h6>
          </div>

          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={mongo} style={{width:"8vw"}}/>
            <h6 className="logo-text">Mongo DB</h6>
          </div>

        </div>
        <div className="row">
      
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end " >
            <img src={jest} style={{width:"5vw"}}/>
            <h6 className="logo-text">Jest</h6>
          </div>
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={enzyme} style={{width:"5vw"}}/>
            <h6 className="logo-text">Enzyme</h6>
          </div>
          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={cypress} style={{width:"5vw"}}/>
            <h6 className="logo-text">Cypress</h6>
          </div>

          <div className="image-div col-3 d-flex flex-column align-items-center justify-content-end" >
            <img src={mocha} style={{width:"5vw"}}/>
            <h6 className="logo-text">Mocha</h6>
          </div>

        </div>
      </div>
      {/* <Link to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
        <button className="home-button">FIND OUT MORE</button>
      </Link> */}

    </div>
  );
}

export default Home;