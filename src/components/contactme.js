import React, { Component } from 'react';

class ContactMe extends Component {
  render(){
    return(
      <div className="contactMeContainer ui stackable two column grid container" id="contactMe">

        <div className="contactbox column">
          <h3 >Drop me a message</h3>
          <form className="contactForm form ui form" method="POST" action="https://formspree.io/your@email.com">
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

        <div className="contactContainer column">
        
          <div className="contactInfoContainer">
          <h3 className="getinTouch">Get In Touch</h3>

            <div className="contactInfoContainer ui large list">
              <div className="mailCircle item">
                <div className="ui circular big medium icon button">
                  <i className="envelope open outline icon"></i>
                </div>
                <div className="email content">
                  <a href="mailto:contactme@rgdeveloper.com" className="email description">contactme@rgdeveloper.com</a>
                </div>
              </div>
              <div className="phoneCircle item">
                <div className="ui circular big medium icon button">
                  <i className="mobile alternate icon"></i>
                </div>
                <div className="phone content">
                  <div className="phone">555-555-5555</div>
                </div>
              </div>
            </div>

          </div>

          
          <div className="socialContainer">
          <h3>Let Be Social</h3>
            <button className="ui circular big twitter icon button">
              <i className="twitter icon"><a href="/" className="twitter"></a></i>
            </button>
            <button className="ui circular big linkedin icon button">
              <i className="linkedin icon"><a href="/" className="linkedin"></a></i>
            </button>
            <button className="ui circular big github icon button">
              <i className="github icon"><a href="/" className="githubr"></a></i>
            </button>
            <button className="ui circular big youtube icon button">
              <i className="youtube icon"><a href="/" className="youtube"></a></i>
            </button>
            <button className="ui circular big medium icon button">
              <i className="medium icon"><a href="/" className="medium"></a></i>
            </button>
          </div>

        </div>

      </div>
    )
  }
}

export {ContactMe}