import React, { Component } from 'react';
// import ProjectCard from './projectcard';



// import {RoachReport} from 'http://github.com/thuy-n3/roachreport/components/ulti/projectcard';
//Project component will be import from somewhere outside and pull into ExampleProject


//example of how it going to be pulled in
// const ExampleProject = () => ProjectTemplate(example) 



const ProjectGallery = () => {
  return(
    <div className="projectGalleryContainer container" id="myProjects">
      <div className="backgroundImg"></div>
      <div className="galleryIntro">
        <h1 className="pgtitle sectionTitle">Project Gallery</h1>

      </div>
      <div className="gridContainer ">

       {/* <ProjectCard /> */}




       
      </div>
    </div>
  )
}




export {ProjectGallery}


