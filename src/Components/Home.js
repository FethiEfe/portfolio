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

function Home() {
  return (
    <div className="home-section" id="home">
      <div className="intro">

        <h1>HELLO. I'M FETHI AKCAY</h1>
        <div></div>
        <p>FULL STACK WEB DEVELOPER</p>

      </div>

      <div className="img-skills">
        <div className="skills-row">

          <div className="image-div" >
            <img src={js} />
            <h2 className="logo-text">JAVASCRIPT</h2>
          </div>

          <div className="image-div" >
            <img src={html} />
            <h2 className="logo-text">HTML5</h2>
          </div>
          <div className="image-div" >
            <img src={css} />
            <h2 className="logo-text">CSS3</h2>
          </div>
          <div className="image-div" >
            <img src={react} />
            <h2 className="logo-text">REACT</h2>
          </div>

        </div>
        <div className="skills-row">
          <div className="image-div" >
            <img src={redux} />
            <h2 className="logo-text">REDUX</h2>
          </div>
          <div className="image-div" >
            <img src={node} />
            <h2 className="logo-text">NODE JS</h2>
          </div>
          <div className="image-div" >
            <img src={express} />
            <h2 className="logo-text">EXPRESS</h2>
          </div>
          <div className="image-div" >
            <img src={postgresql} />
            <h2 className="logo-text">POSTGRES</h2>
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