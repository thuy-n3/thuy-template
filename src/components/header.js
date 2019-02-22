import React, { Component } from 'react';
import Navigation from './navigation';


class Header extends Component{
  render(){
    return(
      <div className="headerContainer" id="home">
      
        <div className="navBar">
          <Navigation />
        </div>

        <div className="herocontainer">
          <div className="heroImg"></div>
          <div className="headerIntro">
            <h1 className="headerTitle">Thuy Nguyen</h1>
            <h2 className="headerSubtitle">Front-End Developer</h2>
            <a href="#contactme" className="contactme">Contact Me</a>
            <a href="#projects" className="seeProjects"> My Projects</a>
          </div>
        </div>





      </div>
    )
  } 
};

export {Header};

// <img className="heroImg" src="./images/coffeedesk.jpg" /> 