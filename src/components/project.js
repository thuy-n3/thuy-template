import React, { Component } from 'react';

const processLink = (link) => {
  
  return(
    <a href={link.href}>{link.title}</a>
  )
}

const ProjectTemplate = (props) => {
    return(
      <div className="projectContainer">
        <h1 className="projectTitle">{props.title}</h1>
        <h2 className="projectSubTitle">{props.subtitle}</h2>
        <img src={props.image.src} alt={props.image.alt} className="projectImage" />
        <h3 className="projectText">{props.text}</h3>
        <div className="linkContainer">
          <a>Github</a>
          <a>Project Page</a>

          {props.links.map(processLink)}

        </div>
        <h3 className="techUsed">{props.tech}</h3>
      </div>
    )
}

const example = {
  title: 'title of project', 
  subtitle: 'mini project description',
  image: {
    src: './images/TIYme.jpeg',
    alt: 'my image'
  },
  text: "project descriptions",
  links:[
    {
      href: 'example.com',
      title: 'title of site '
    },
    {
      href: 'github.com/example',
      title: 'example project github page'
    }
  ], 
  tech: "list what tech is used"
}


export {example, ProjectTemplate}

//{ props.link.map(({ href, title }) => <a href={href}>{title}</a>)}