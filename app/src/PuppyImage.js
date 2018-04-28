import React, { Component } from 'react';
import puppy from './schroeder.jpg';
import './PuppyImage.css';


class PuppyImage extends Component{
  render() {
    return(
      <div className="Wrapper">
        <div className="PuppyImage">
          <img src={puppy} className="puppy-img" alt="Picture of a Schnauzer" />
        </div>
      </div>
    );
  }
}

export default PuppyImage;