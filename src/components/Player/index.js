import React, { PureComponent } from 'react';

import Layer from '../Layer';

class Player extends PureComponent {
  render() {
    return (
      <>
        <Layer level="2">
          <div style={{ width: 320, height: 100, bottom: 0, left: 0, backgroundColor: 'blue', opacity: .85, position: 'absolute' }} />
        </Layer>
        <Layer level="2-25">
          <div style={{ width: 50, height: 50, backgroundColor: 'tomato', opacity: .85, position: 'absolute', bottom: 25, left: 25 }} />
        </Layer>
        <Layer level="2-25">
          <div style={{ width: 50, height: 50, backgroundColor: 'tomato', opacity: .85, position: 'absolute', bottom: 25, left: 100 }} />
        </Layer>
        <Layer level="2-25">
          <div style={{ width: 50, height: 50, backgroundColor: 'tomato', opacity: .85, position: 'absolute', bottom: 25, left: 175 }} />
        </Layer>
        <Layer level="2-25">
          <div style={{ width: 50, height: 50, backgroundColor: 'tomato', opacity: .85, position: 'absolute', bottom: 25, left: 250 }} />
        </Layer>
      </>
    );
  }
}

export default Player;
