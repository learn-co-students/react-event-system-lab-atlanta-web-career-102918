// Code EyesOnMe Component Here
import React, { Component } from 'react';
// import Keypad from './Keypad';

class EyesOnMe extends Component {

  onFocus = () => {
    console.log('Good!');
  }

  onBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>Submit</button>
    );
  }


} // end EyesOnMe

export default EyesOnMe;
