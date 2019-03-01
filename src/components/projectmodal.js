
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
  <Modal trigger={<Button>Project Title</Button>} basic size='small'>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content image>
      <Image wrapped size='medium' src='../../images/coffee/brooke-lark-289769-unsplash.jpg' />
      <Modal.Description>
        <p>
          Your inbox is getting full, would you like us to enable automatic archiving of old messages?
      </p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)


export { ProjectModal }