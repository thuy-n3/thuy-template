import React, { Component } from 'react';

class ContactMe extends Component {
  render(){
    return(
      <div className="contactMeContainer">
        <form className="contactForm">
          <input className="name" type="text" placeholder="Your Name"></input>
          <input className="email" type="email" placeholder="Your Email"></input>
          <textarea className="message" placeholder="message"></textarea>
          <input className="submit" type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}