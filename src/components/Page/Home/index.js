import React, { PureComponent } from 'react';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Static from '../../Static';

class PageHome extends PureComponent {
  render() {
    return (
      <>
        <Static>
          <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
        </Static>
        <Graphics>
          <Layer l="2">
            <div style={{ width: 300, height: 300, backgroundColor: 'blue', opacity: .85, right: 0, bottom: 0, position: 'absolute' }} />
          </Layer>
          <Layer l="1">
            <div style={{ width: '100%', height: '100%', backgroundColor: 'tomato', opacity: .85 }} />
          </Layer>
          <Layer l="2">
            <div style={{ width: 300, height: 300, backgroundColor: 'blue', opacity: .85 }} />
          </Layer>
        </Graphics>
      </>
    );
  }
}

export default PageHome;
