import React, { Component } from 'react';


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
        <a href={github}>Check it out</a>
      </span>
      <span>
        <i className="github large icon"></i>
        <a href={projectsite}>Github</a>
      </span>
    </div>
  </div>




export {ProjectCard}

