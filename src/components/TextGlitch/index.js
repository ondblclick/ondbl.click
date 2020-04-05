import React, { PureComponent } from 'react';

import './index.css';

class TextGlitch extends PureComponent {
  render() {
    const { foregroundColor, backgroundColor, children } = this.props;

    return (
      <>
        <style>{`
          .TextGlitch::before { color: ${foregroundColor}; background-color: ${backgroundColor}; }
          .TextGlitch::after { color: ${foregroundColor}; background-color: ${backgroundColor}; }
        `}</style>
        <div
          className="TextGlitch"
          data-text={children}
        >
          {children}
        </div>
      </>
    );
  }
}

export default TextGlitch;
