import React, { Component } from 'react';
import Navigation from './navigation';
import { DropNav } from './dropnav';




class Header extends Component{
  render(){
    return(
      <div className="headerContainer grid " id="home">
      
        <div className="navBar">
          <Navigation />
        </div>

        <div className="mobNav">
          <DropNav />
        </div>

        <div className="herocontainer four wide column">
          <div className="heroImg"></div>
          <div className="headerIntro">
            <h1 className="headerTitle ui first header">Hi I'm Ryan Gosling</h1>
            <h2 className="headerSubtitle ui second header ">A Web Developer</h2>
            <a href="#contactme" className="contactme ui large inverted standard button">Contact Me</a>
          </div>
        </div>


      </div>
    )
  } 
};

export {Header};

// <img className="heroImg" src="./images/coffeedesk.jpg" /> 

// <a href="#contactme" className="contactme">Contact Me</a>
// <a href="#projects" className="seeProjects"> My Projects</a>