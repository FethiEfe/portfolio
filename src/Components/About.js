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
        <p className = "about-me-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Felis imperdiet proin fermentum leo vel orci porta non. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Maecenas pharetra convallis posuere morbi leo urna molestie. Sed adipiscing diam donec adipiscing tristique risus. Vitae semper quis lectus nulla at volutpat diam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Cras pulvinar mattis nunc sed blandit. Risus pretium quam vulputate dignissim suspendisse in.</p>
      </div>
      <div className = "about-right">
        <img className = "portfolio-pic" src={portfolio} />
        <div className="contact-icons" >
          <a href ="https://www.linkedin.com/in/fethi-efe-akcay/" target = "_blank"><img className = "github-pic" src = {github} /></a>
          <a href = "https://github.com/FethiEfe" target = "_blank" ><img className = "linkedin-pic" src = {linkedin} /></a>
          <a href = "mailto:f.akcay1@gmail.com" ><img className = "email-pic" src = {email} /></a>
          
        </div>
      </div>
      
    </div>
  );
}

export default About;