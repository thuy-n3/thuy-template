import React, { Component } from 'react';
import {example, ProjectTemplate} from './project';
// import {RoachReport} from 'http://github.com/thuy-n3/roachreport/components/ulti/projectcard';
//Project component will be import from somewhere outside and pull into ExampleProject


//example of how it going to be pulled in
const ExampleProject = () => ProjectTemplate(example) 

class ProjectGallery extends Component{
  render(){
    return(
      <div className="projectGalleryContainer">
        <div className="title"></div>
        <div className="subTitle"></div>
         <div className="grid-container">
          <div className="rowContainer">
            <div className="gridItem">
              <ExampleProject />
            </div>
            <div className="gridItem">
              <ExampleProject />
            </div>
            <div className="gridItem">
              <ExampleProject />
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

export {ProjectGallery}