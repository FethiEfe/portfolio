import React from 'react';
import portfolio from "../Images/portfolio.jpg"
import github from "../Images/github.png"
import linkedin from "../Images/linkedin.png"
import email from "../Images/email.png"
import profilepic from "../Images/profile-pic.jpg"

function About() {
  return (
    <div className="about-session" id = "about">
      <div className = "about-left">
        <p className = "ABOUT_ME">ABOUT ME</p>
        <p className = "about-me-p"> Hi Stranger! Welcome to my page. Let me introduce myself. I am a web developer based in Garden State. I have nearly two years of professional experience in creating and maintaining full-stack web applications with PERN and MERN stacks. My favorite thing in programming is bug hunting. I love investigating problems,  providing, and implementing permanent solutions. Also, I have an eye for details and usually, I am the one who reports the bugs first in my team. That's why my co-workers call me a bug-magnet. I have to admit, I kinda like it. My biggest motivation is creating an application that makes a difference one day.  Besides programming, I love to travel, play ping-pong, cook, and read.  That's pretty much it about me and I would love to learn more about you. Feel free to message me on Linkedin. Quick reminder: If you need a website or maintenance for a Non-profit organization,  I offer free service.  </p>
      </div>
      <div className = "about-right">
        <img className = "portfolio-pic" src={profilepic} />
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