
// class ProjectModal extends Component {
//   render(){
//     return(
//       <div className="modalContainer">
//         <div className="projectTitle"></div>
//         <div className="projectSubtitle"></div>
//         <div>
//           <img className="modalImg"></img>
//         </div>
//         <div className="projectText"></div>
//         <div className="linkContainer">
//           <a>Github</a>
//           <a>Project Page</a>
//         </div>
//         <div className="techUsed"></div>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';


const ProjectModal = () => (
  <Modal trigger={<Button>See Project</Button>} basic size='small'>
    <Header icon='archive' content='Project Title' />
    <Modal.Content image>
      <Image wrapped size='medium' src='../../images/coffee/brooke-lark-289769-unsplash.jpg' />
      <Modal.Description>
        <p>
          It's nice to be around people that have a sense of the world around them, that are, in general, more conscious and conscientious.
        </p>
        <p>
          Tech Used: React, Semantic Ui
        </p>
        <a href="www.google.com">Github</a>
        <a href="www.github.com">Github</a>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> 
        <a href="www.google.com">Github</a>
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)


export { ProjectModal }