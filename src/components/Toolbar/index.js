import React, { PureComponent } from 'react';
import classnames from 'classnames';

import './index.css';

class Toolbar extends PureComponent {
  render() {
    return (
      <div className={classnames('Toolbar', this.props.className)} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

export default Toolbar;
