import React, { Component } from 'react';
import {example, ProjectTemplate} from './project';
// import ProjectCard from './projectcard';
// import {RoachReport} from 'http://github.com/thuy-n3/roachreport/components/ulti/projectcard';
//Project component will be import from somewhere outside and pull into ExampleProject


//example of how it going to be pulled in
// const ExampleProject = () => ProjectTemplate(example) 

class ProjectGallery extends Component{
  render(){
    return(
      <div className="projectGalleryContainer" id="myProjects">
        <div className="backgroundImg"></div>
        <div className="galleryIntro">
          <h1 className="title">Project Gallery</h1>
        
        </div>
        <div className="gridContainer ">
          
            {/* <ProjectCard /> */}


        </div>
      </div>
    )
  }
}

export {ProjectGallery}


// <div className="grid-container">
//   <div className="rowContainer">
//     <div className="gridItem">
//       <ExampleProject />
//     </div>
//     <div className="gridItem">
//       <ExampleProject />
//     </div>
//     <div className="gridItem">
//       <ExampleProject />
//     </div>
//   </div>
//   <div className="rowContainer">
//     <div className="gridItem"></div>
//     <div className="gridItem"></div>
//     <div className="gridItem"></div>
//   </div>
//   <div className="rowContainer">
//     <div className="gridItem"></div>
//     <div className="gridItem"></div>
//     <div className="gridItem"></div>
//   </div>
// </div> 