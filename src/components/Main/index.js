import React, { Component } from 'react';

import './index.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">{this.props.children}</div>
    );
  }
}

export default Main;
