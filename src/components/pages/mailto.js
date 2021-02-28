import React from 'react';
import { Link } from "react-router-dom";
import * as emailjs from 'emailjs-com';
import "../mailto.css"

import {Button,Textarea} from 'rbx';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      success: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: '/*YOUR NAME OR COMPANY*/',
      subject,
      message_html: message,
    };
    emailjs.send(
      'service_o4j7ruv',
      'template_p3mqcjm',
       templateParams,
      'user_kvW5kFGiY6unG4dBFZLaG'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      success:true
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message, sentMessage } = this.state;

    return (
      <>
      <form onSubmit={this.handleSubmit} className="containers">
        <div style={{padding:"20px"}}>
          <h1 className="headers">Name</h1>
          <div className="writings">
            <input
              name="name"
              type="text"
              placeholder="Name..."
              value={name}
              onChange={this.handleChange}
              className="textfields"
            />
          </div>
        </div>
        <div style={{padding:"20px"}}>
          <h1 className="headers">Email</h1>
          <div className="writings">
            <input
              name="email"
              type="email"
              placeholder="Email..."
              value={email}
              onChange={this.handleChange}
              className="textfields"
            />
          </div>
        </div>
        <div style={{padding:"20px"}}>
          <h1 className="headers">Subject</h1>
          <div className="writings">
            <input
            className="textfields"
              name="subject"
              type="text"
              placeholder="Subject..."
              value={subject}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div style={{padding:"20px"}}>
          <h1 className="headers">Message</h1>
          <div className="writings">
            <Textarea
              name="message"
              placeholder="Please let us know..."
              value={message}
              className="textfields"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div kind="group" style={{marginTop:"20px",alignItems:"center", justifyContent:"center", textAlign:"center"}}>
          <div style={{marginBottom:"20px"}}>
            <Button color="dark" type="submit" className="buttonstretch1">Send</Button>
          </div>
          <div >
            <Button className="buttonstretch2">Cancel</Button>
          </div>
        </div>
        <h1 style={{marginTop:"30px", fontSize:"60px", color:"#d8b661", display:this.state.success ? "block" : "none", textAlign:"center"}}>Success</h1>
      </form>
      </>
    );
  }
}

export default ContactForm;
