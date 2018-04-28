import React, { Component } from 'react';
import './DisplayName.css';

class DisplayName extends Component{

  
  render() {
    var names = ["Schroeder", "Fritz", "Schnitzel"];
    var puppyName = names[Math.floor(Math.random() * Math.floor(3))];
    
    return (
      <div className="DisplayName">
        <p>Well, {puppyName}, huh? I like that!</p>
      </div>
    );

  }
}

export default DisplayName;