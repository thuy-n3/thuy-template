import React, { Component } from 'react';

class AboutMe extends Component{
  render() {
    return(
      <div className="aboutMeContainer">
        <h1 className="title">About Me</h1>
        <img className="bioImage" src="./images/TIYme.jpeg" />
        <p className="bioText">I am a front-end developer with a passion for developing creative and responsive web applications. I graduated from The Iron Yard with a focus in Front-End Engineering. I am curious to learn and expand my development foundation and grow as a developer. I have a business background with BA in Finance and Marketing from University of Houston. When I am not developing, I like to bake and discovering new restaurants. Feel free to contact me with any questions.</p>
        <div className="buttonContainer">
          <a href="./images/ThuyFEDeveloper.pdf" target="blank">Resume</a>
          <a href="https://github.com/thuy-n3" target="blank">Github</a>
        </div>
      </div>
    )
  }
}

export {AboutMe}