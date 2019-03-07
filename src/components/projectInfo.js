import React, { Component } from 'react';
// import ProjectData from './projectdata.js';



const ProjectInfo = () => {
  return(

    <div className="projectInfoContainer">
      <div className="ui three stackable centered link cards three column grid ">
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src='./images/coffee/michal-parzuchowski-324218-unsplash.jpg'/>
            </div>
            <div className="content">
              <div className="header">{projectData.title}</div>
              <div className="description">{projectData.description} </div>
              <br />
              <div className="techUsed">{projectData.tech}</div>
            </div>
            <div className="extra content">
              <span className="right floated">
                <i className="arrow circle right large icon"></i>
                <a href={projectData.github}>Check it out</a>
              </span>
              <span>
                <i className="github large icon"></i>
                <a href={projectData.projectsite}>Github</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





// const projectDetails = 
// {

//   title: 'title of project',
//   description: 'I was very excited. I went through puberty in a theme park. I think American news is pretty tragic in general.',
//   image: {
//     src: './images/coffee/brooke-lark-289769-unsplash.jpg',
//     alt: 'cofee breakfast image'
//   },
//   tech: "React, Semantic Ui!!!",
//   github: 'http://github.com',
//   projectsite: 'http://google.com'
// }

export { ProjectInfo }