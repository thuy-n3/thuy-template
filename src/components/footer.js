import React, { Component } from 'react';
import Navigation from './navigation.js';

class Footer extends Component{
  render(){
    return (
      <div className="footerContainer">
        <div className="footerImg">
          <Navigation />
        </div>
      </div>
    )
  }
}

export { Footer }

// <NavigationFooter />
