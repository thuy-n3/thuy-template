import React, { Component } from 'react';

class DropNav extends Component {
  render() {
    return (
      
      <div className="DropNavContainer">

        <div className="ui compact menu">
          <div className="ui simple dropdown item">
            RG
             <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item"><a href="#home" className="home item active">Home</a></div>
              <div className="item"><a href="#aboutMe" className="aboutMe item">About Me</a></div>
              <div className="item"> <a href="#myProjects" className="myProjects item">My Projects</a></div>
              <div className="item"> <a href="#contactme" className="contactMe item">Contact Me</a></div>
              
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export {DropNav};


