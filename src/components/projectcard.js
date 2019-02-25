import React, { Component } from 'react';


class ProjectCard extends Component {
  render(){
    return(
      <div className="projectCardContainer">
        <div className="ui three stackable centered link cards three column grid ">


          <div className="column">
            <div className=" ui fluid card">
              <div className="projectImg image">
                <img src="./images/coffee/brooke-lark-289769-unsplash.jpg" />
              </div>
              <div className="content">
                <div className="center aligned header">Matt Giampietro</div>
                <div className="center aligned description"> Matthew is an interior designer living in New York.</div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    )
  }
}

export {ProjectCard}

