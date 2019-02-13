import React, { Component } from 'react';

class Project extends Component{
  render (){
    return(
      <div className="projectContainer">
        <h1 className="projectTitle"></h1>
        <h2 className="projectSubTitle"></h2>
        <img src="/" className="projectImage" />
        <h3 className="projectText"></h3>
        <div className="linkContainer"></div>
        <h3 className="techUsed"></h3>
      </div>
    )
  }
}