import React, { Component } from 'react';

class Navigation extends Component{
  render(){
    return(
      <div className="NavContainer">
        <h1>This is from the navigation.js</h1>
        <h1>Thuy Nguyen</h1>
        <a href="#home" className="home">Home</a>
        <a href="#aboutMe" className="aboutMe">About Me</a>
        <a href="#myProjects" className="myProjects">My Projects</a>
        <a href="#contactme" className="contactMe">Contact Me</a>
      </div>
    )
  }
}

export default Navigation;