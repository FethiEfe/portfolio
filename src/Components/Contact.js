import React from 'react';
import home from "../Images/home.png"
import linkedin from "../Images/linkedin.png"
import email from "../Images/email.png"
import github from "../Images/github.png"
import phone from "../Images/phone.png"
import axios from "axios"

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      isSending: false,
     
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = (e) => {
    
    e.preventDefault();
    const { name, email, message } = this.state
    axios
      .post(`/api/contact`, { name, email, message })
      .then(() => {
        this.setState({
          isSending: true,
          name: "",
          email: "",
          message: "",
        })
      })
  }
  render() {
    return (
      <div className="contact-session" id="contact">
        <h1>Let's Get In Touch!</h1>
        <div className="form-and-contact">
          <div className="email-form">
            <label>NAME</label>
            <input onChange={this.handleChange} name="name" value={this.state.name} />
            <label>EMAIL</label>
            <input onChange={this.handleChange} name="email" value={this.state.email} />
            <label>MESSAGE</label>
            <textarea onChange={this.handleChange} name="message" value={this.state.message} />
            <button onClick={this.handleClick}>SEND MESSAGE</button>
            {!this.state.isSending ? null : <h5 style ={{color: "green", fontSize:20 ,marginTop: "0.5vh"}}>Email sent!</h5>}
          </div>
          <div className="contact-infos">
            <div className="contact-home-icon">
              <img src={home} />
              <p style={{marginBottom:"0px", color:"black"}}>Somerville, NJ</p>
            </div>

            <div className="contact-linkedin-icon">
              
              <a href="https://www.linkedin.com/in/fethi-efe-akcay/" target="_blank"><img src={linkedin} /></a>
              <a id = "linkedin-text" href="https://www.linkedin.com/in/fethi-efe-akcay/" target="_blank">https://www.linkedin.com/in/fethi-efe-akcay/</a>
            </div>

            <div className="contact-email-icon">
              
              <a href="mailto:f.akcay1@gmail.com"><img src={email} /></a>
              <a id = "email-text" href="mailto:f.akcay1@gmail.com">f.akcay1@gmail.com</a>
            </div>

            <div className="contact-github-icon">
              
              <a href="https://github.com/FethiEfe" target="_blank"><img src={github} /></a>
              <a id = "github-text"href="https://github.com/FethiEfe" target="_blank">https://github.com/FethiEfe</a>
            </div>


            <div className="contact-phone-icon">
              <img src={phone} />
              <p style={{marginBottom:"0px",color:"black"}}>+1 210 602 7033</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;