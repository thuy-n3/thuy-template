import React, { Component } from 'react';


class ProjectCard extends Component {
  render(){
    return(
      <div className="projectCardContainer">
        <div className="ui three stackable centered link cards three column grid ">

          <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src="./images/coffee/brooke-lark-289769-unsplash.jpg" />
                </div>
                <div className="content">
                  <div className="header">Project Title</div>
                  <div className="description">I was very excited. I went through puberty in a theme park. I think American news is pretty tragic in general. </div>
                  <br />
                  <div className="techUsed">Tech Used: React, Semantic Ui</div>
                </div>
                <div className="extra content">
                  <span className="right floated">
                  <i className="arrow circle right large icon"></i>
                    <a href="https://github.com" target="blank">Check it out</a>
                  </span>
                  <span>
                    <i className="github large icon"></i>
                    <a href="https://github.com" target="blank">Github</a>
                  </span>
                </div>
              </div>
          </div> 

        </div>
      </div>
    )
  }
}




export {ProjectCard}

