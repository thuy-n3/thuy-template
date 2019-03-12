import React, { Component } from 'react';

class AboutMe extends Component{
  render() {
    return(
      <div className="aboutMeContainer " id="aboutMe">
        <h1 className="bioTitle">About Me</h1>
        <img className="bioImage responsiveryan" src="./images/ryanwhiteshirt.jpg" />
        <div className="bioContainer">
          <p className="bioText">I could be pensive, uhh... smart, supersticious, brave? And I, uhh, I can be light on my feet. Hey girl, I brought home a few bottles of wine since I know you needed more corks for that pinterest project. And I just turn up the parts of myself that are them and turn down the parts that aren't. Anything happens in that five minutes and I'm yours. I want all of you, forever, everyday. You and me...everyday.</p>
        </div> 
        <div className="bioButtonContainer">
          <div className="resumeButton ui inverted large primary button"> 
              <i className="file outline icon
              "></i>
              <a  ref="/" target="blank">Resume</a>
          </div>
          <div className="githubButton ui inverted large primary button">
            <i className="github icon"></i>
            <a href="https://github.com" target="blank">Github</a>
          </div>
        </div>
      </div>
    )
  }
}

export {AboutMe}

