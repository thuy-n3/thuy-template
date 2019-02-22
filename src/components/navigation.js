import React, { Component } from 'react';

class Navigation extends Component{
  render(){
    return(
      // <div className="navContainer ui secondary menu">
      <div className="navContainer ui text menu">
       
          <img className="logo" src="./images/tnpink100.png" /> 
          <a href="#home" className="home pink item active">Home</a>
          <a href="#aboutMe" className="aboutMe pink item">About Me</a>
          <a href="#myProjects" className="myProjects pink item">My Projects</a>
          <a href="#contactme" className="contactMe pink item">Contact Me</a>
      
      </div>
    )
  }
}

export default Navigation;

