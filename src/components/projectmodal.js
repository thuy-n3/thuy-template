import React, { Component } from 'react';

class ProjectModal extends Component {
  render(){
    return(
      <div className="modalContainer">
        <div className="projectTitle"></div>
        <div className="projectSubtitle"></div>
        <div>
          <img className="modalImg"></img>
        </div>
        <div className="projectText"></div>
        <div className="linkContainer">
          <a>Github</a>
          <a>Project Page</a>
        </div>
        <div className="techUsed"></div>
      </div>
    )
  }
}

export {ProjectModal}