import React from 'react';
import home from "../Images/home.png"
import linkedin from "../Images/linkedin.png"
import email from "../Images/email.png"
import github from "../Images/github.png"
import phone from "../Images/phone.png"

function Contact() {
  return (
    <div className="contact-session" id="contact">
      <h1>Let's Get In Touch!</h1>
      <div className ="form-and-contact">
        <div className ="email-form">
          <label>NAME</label>
          <input/>
          <label>EMAIL</label>
          <input/>
          <label>MESSAGE</label>
          <textarea/>
          <button>SEND MESSAGE</button>
        </div>
        <div className ="contact-infos">
          <div className ="home">
            <img src ={home} />
            <p>Dallas, TX</p>
          </div>

          <div className ="linkedin">
            <img src ={linkedin} />
            <a href ="https://www.linkedin.com/in/fethi-efe-akcay/" target = "_blank">https://www.linkedin.com/in/fethi-efe-akcay/</a>
          </div>

          <div className ="email">
            <img src ={email} />
            <a href = "mailto:f.akcay1@gmail.com">f.akcay1@gmail.com</a>
          </div>

          <div className ="github">
            <img src ={github} />
            <a href = "https://github.com/FethiEfe">https://github.com/FethiEfe</a>
          </div>


          <div className ="phone">
            <img src ={phone} />
            <p>+1 210 602 7033</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;