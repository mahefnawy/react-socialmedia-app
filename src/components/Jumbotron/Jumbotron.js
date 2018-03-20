import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  popupBox() {
    setTimeout(() => alert('Thank You'), 5000);
  }
  render() {
    return (
      <div>
        <div className="jumbotron-div">
          <a
            className="main-btn waves-effect waves-light btn red lighten-2"
            onClick={() => this.popupBox()}
          >
            Please Click me and Wait 5 seconds !!!
          </a>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
