import React, { Component } from 'react';
import './InputName.css';


class InputName extends Component{
  render() {
    return(
      <div className="InputName">
        <form>
          <input type="text" placeholder="What's my name?" />
        </form>
      </div>
    );
  }
}

export default InputName;