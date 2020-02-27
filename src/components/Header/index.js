import React, { PureComponent } from 'react';

import './index.css';

class Header extends PureComponent {
  render() {
    return (
      <div className="Header">
        {this.props.children}
      </div>
    );
  }
}

export default Header;
