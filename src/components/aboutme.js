import React, { Component } from 'react';

class AboutMe extends Component{
  render() {
    return(
      <div className="aboutMeContainer" id="aboutMe">
        <h1 className="bioTitle">About Me</h1>
        <img className="bioImage responsiveryan" src="./images/ryanwhiteshirt.jpg" />
        <div className="bioContainer">
          <p className="bioText">I could be pensive, uhh... smart, supersticious, brave? And I, uhh, I can be light on my feet. Hey girl, I brought home a few bottles of wine since I know you needed more corks for that pinterest project. And I just turn up the parts of myself that are them and turn down the parts that aren't. Anything happens in that five minutes and I'm yours. I want all of you, forever, everyday. You and me...everyday.

          I hear about actors who become the role and I think 'I wonder what that feels like'. If I drive for you, you give me a time and a place, I give you a five minute window. We're always changing. The pictures which will be accompanying this interview are basically of me in tight wet T-shirts and tiny leather jackets going around in the rain and pretending that I'm a lot cooler than I am. It's nice to be around people that have a sense of the world around them, that are, in general, more conscious and conscientious.

          I drive. Then, telling Derek Cianfrance that I'd ever I could rob a bank I'd do it on my motorcycle, and he said 'That's weird, I just wrote a script about that'. You have a shelf life as an actor, so you have to find another way to express yourself. You just tell me what you want, and I'm gonna be that for you. You get a new one.</p>
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

