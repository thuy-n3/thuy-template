// import React, { Component } from 'react';

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

// export default ModalModalExample

import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const ModalModalExample  = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)


export { ModalModalExample }