import React, { Component } from 'react';


class ContactForm extends Component {
  render(){
    return(
      <div className="contactMeContainer" id="contactMe">

        <div className="contactBackgroundImg"></div>

        <div className="formContainer">
          <form className="contactForm ui form" method="POST" action="https://formspree.io/your@email.com">
            <div className="field">
              <input className="name" type="text" name="name" placeholder="Your Name"></input>
            </div>
            <div className="field">
              <input className="comapany" type="text" name="company" placeholder="Your Company Name"></input>
            </div>
            <div className="field">
              <input className="email" type="email" name="email" placeholder="Your email"></input>
            </div>
            <div className="field">
              <textarea className="message" name="message" placeholder="Enter Your Message"></textarea>
            </div>
            <button className="ui button submit" type="submit">Send Message</button>
          </form>
        </div>
      </div>  
    )
  }
}

export {ContactForm};

