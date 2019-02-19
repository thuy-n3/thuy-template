import React, { Component } from 'react';
import Navigation from './navigation';


class Header extends Component{
  render(){
    return(
      <div className="headerContainer">
        <h1>This is from header.js</h1>
        <Navigation />
        <div className="herocontainer">
          <img src='./images/pinkdesk.jpg' alt="coffee desk" className="hero" />
        </div>
        <h1 className="headerTitle">Thuy Nguyen</h1>
        <h2 className="headerSubtitle">Front-End Developer</h2>
        <a href="#contactme" className="contactme">Contact Me</a>
        <a href="#projects" className="seeProjectss"> My Projects</a>
      </div>
    )
  } 
};

export {Header};

