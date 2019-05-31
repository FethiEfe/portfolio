import React from 'react';
import portfolio from "../Images/portfolio.jpg"
import github from "../Images/github.png"
import linkedin from "../Images/linkedin.png"
import email from "../Images/email.png"

function About() {
  return (
    <div className="about-session" id = "about">
      <div className = "about-left">
        <p className = "ABOUT_ME">ABOUT ME</p>
        <p className = "about-me-p"> I was born in Turkey and travelled across many countries and experienced variety of cultures. I’ve come to appreciate the positive impact of tech on peoples lives. Having experience in sales for over two years,  I’ve honed my interpersonal skills. My journey inspired me to pursue the world of tech to the next level. I started my Full-stack immersive program at DevMountain in March of 2019, and I’ve gained the skills to problem solve, learn in a fast-paced environment, and also build effective applications in tight deadlines. My passion is to create apps with functional design and effective code. Besides programming, I love to travel, play ping-pong, and to learn different programming languages. </p>
      </div>
      <div className = "about-right">
        <img className = "portfolio-pic" src={portfolio} />
        <div className="contact-icons" >
          <a href = "https://github.com/FethiEfe" target = "_blank"><img className = "github-pic" src = {github} /></a>
          <a href = "https://www.linkedin.com/in/fethi-efe-akcay/" target = "_blank" ><img className = "linkedin-pic" src = {linkedin} /></a>
          <a href = "mailto:f.akcay1@gmail.com" ><img className = "email-pic" src = {email} /></a>
          
        </div>
      </div>
      
    </div>
  );
}

export default About;