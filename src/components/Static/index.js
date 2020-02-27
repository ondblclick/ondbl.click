import React from 'react';

import './index.css';

class Static extends React.PureComponent {
  render() {
    return (
      <div className="Static" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Static;
