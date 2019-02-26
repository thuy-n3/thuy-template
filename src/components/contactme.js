import React, { Component } from 'react';

class ContactMe extends Component {
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

        <div className="contactContainer">

          <div className="contactInfo ui large list">
            <div className="item">
              <i className="envelope open outline icon"></i>
              <div className="content">
                <div className="email-label header">Email</div>
                <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
              </div>
            </div>
            <div className="item">
              <i className="mobile alternate icon"></i>
              <div className="content">
                <div className="phone-label header">Phone</div>
                <div className="phone">555-555-5555</div>
              </div> 
            </div>
          </div>

          <div className="socialContainer">
            <div className="socialButton"><a href="/" className="twitter">Twitter</a></div>
            <div className="socialButton"><a href="/" className="linkedin">Linkedin</a></div>
            <div className="socialButton"><a href="/" className="github">Github</a></div>
          </div>

        </div>

      </div>
    )
  }
}

export {ContactMe}