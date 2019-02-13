import React, { Component } from 'react';

class ProjectGallery extends Component{
  render(){
    return(
      <div className="projectGalleryContainer">
        <div className="title"></div>
        <div className="subTitle"></div>
        <div className="grid-container">
          <div className="rowContainer">
            <div className="gridItem">
              <img />
            </div>
            <div className="gridItem">
              <img />
            </div>
            <div className="gridItem">
              <img />
            </div>
          </div>
          <div className="rowContainer">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
          </div>
          <div className="rowContainer">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
          </div>
        </div>
      </div>
    )
  }
}