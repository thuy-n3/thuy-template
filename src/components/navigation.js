import React, { Component } from 'react';

class Navigation extends Component{
  render(){
    return(
      // <div className="navContainer ui secondary menu">
      <div className="navContainer ui inverted text menu">
       
          <img className="logo" src="./images/RGlogo-100.png" /> 
          <a href="#home" className="home item active">Home</a>
          <a href="#aboutMe" className="aboutMe item">About Me</a>
          <a href="#myProjects" className="myProjects item">My Projects</a>
          <a href="#contactme" className="contactMe item">Contact Me</a>
      
      </div>
    )
  }
}

export default Navigation;

