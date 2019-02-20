import React, { Component } from 'react';

class Navigation extends Component{
  render(){
    return(
      <div className="NavContainer">
        
        <h1>Thuy Nguyen</h1>
        <div className="ui secondary menu">
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

