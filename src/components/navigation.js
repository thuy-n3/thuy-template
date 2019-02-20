import React, { Component } from 'react';

class Navigation extends Component{
  render(){
    return(
      <div className="navContainer">
        <div className="ui text menu navlinks">
          <img className="logo" src="./images/tnpink100.png" /> 
          <a href="#home" className="home item active">Home</a>
          <a href="#aboutMe" className="aboutMe item">About Me</a>
          <a href="#myProjects" className="myProjects item">My Projects</a>
          <a href="#contactme" className="contactMe item">Contact Me</a>
        </div>
      </div>
    )
  }
}

export default Navigation;

