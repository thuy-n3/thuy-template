import React, { Component } from 'react';
// import ProjectCard from './projectcard';



// import {RoachReport} from 'http://github.com/thuy-n3/roachreport/components/ulti/projectcard';
//Project component will be import from somewhere outside and pull into ExampleProject


//example of how it going to be pulled in
// const ExampleProject = () => ProjectTemplate(example) 



const ProjectGallery = () => {
  return(
    <div className="projectGalleryContainer" id="myProjects">
      <div className="backgroundImg">
   

        <h1 className="pgtitle sectionTitle">Project Gallery</h1>
   
    
        <div className="projectCardContainer" >

          <div className="ui three stackable cards ">
           
          {projectData.map((data, i ,a) =>  {
          return <ProjectCard {...{...data, key:i}} />
          })}

          </div>

        </div>

     
      </div>
    </div>
  )
}




const ProjectCard = ({ title, description, image, tech, github, projectsite, key }) => 

  <div className="card" key={key}>
    <div className="image">
      <img src={image.src} alt={image.alt} />
    </div>
    <div className="content">
      <div className="header">{title}</div>
      <div className="description">{description} </div>
      <br />
      <div className="techUsed">{tech}</div>
    </div>
    <div className="extra content">
      <span className="right floated">
        <i className="arrow circle right large icon"></i>
        <a href={projectsite}>Check it out</a>
      </span>
      <span>
        <i className="github large icon"></i>
        <a href={github}>Github</a>
      </span>
    </div>
  </div>


const projectData = [
  {
    title: 'Project 1',
    description: 'I was very excited. I went through puberty in a theme park. I think American news is pretty tragic in general.',
    image: {
      src: '../images/coffee/brooke-lark-289769-unsplash.jpg',
      alt: 'pig image'
    },
    tech: "React, Semantic Ui",
    github: 'http://github.com',
    projectsite: 'http://google.com'

  },
  {
    title: 'Project 2',
    description: 'I want all of you, forever, everyday. You and me...everyday. I give you five minutes when we get there. There would be no cuts, real people in there, real tellers.',
    image: {
      src: '../images/coffee/brooke-lark-289769-unsplash.jpg',
      alt: 'coffee 2'
    },
    tech: "React, Semantic Ui",
    github: 'http://github.com',
    projectsite: 'http://google.com'
  },
  {
    title: 'Project 3',
    description: 'I want all of you, forever, everyday. You and me...everyday. I give you five minutes when we get there. There would be no cuts, real people in there, real tellers.',
    image: {
      src: '../images/coffee/brooke-lark-289769-unsplash.jpg',
      alt: 'coffee 3'
    },
    tech: "React, Semantic Ui",
    github: 'http://github.com',
    projectsite: 'http://google.com'

  },
  {
    title: 'Project 4',
    description: 'I was very excited. I went through puberty in a theme park. I think American news is pretty tragic in general.',
    image: {
      src: '../images/coffee/jason-wong-349777-unsplash.jpg',
      alt: 'coffee 4'
    },
    tech: "React, Semantic Ui",
    github: 'http://github.com',
    projectsite: 'http://google.com'

  },
  {
    title: 'Project 5',
    description: 'I was very excited. I went through puberty in a theme park. I think American news is pretty tragic in general.',
    image: {
      src: '../images/coffee/jason-wong-349777-unsplash.jpg',
      alt: 'coffee 4'
    },
    tech: "React, Semantic Ui",
    github: 'http://github.com',
    projectsite: 'http://google.com'

  },
  {
    title: 'Project 6',
    description: 'I was very excited. I went through puberty in a theme park. I think American news is pretty tragic in general.',
    image: {
      src: '../images/coffee/toa-heftiba-274947-unsplash.jpg',
      alt: 'coffee 6'
    },
    tech: "React, Semantic Ui",
    github: 'http://github.com',
    projectsite: 'http://google.com'

  }

]

export {ProjectGallery}


