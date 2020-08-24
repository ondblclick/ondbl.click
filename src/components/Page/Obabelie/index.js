import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Main from '../../Main';
import Header from '../../Header';
import GlitchedImage from '../../GlitchedImage';

import withVariables from '../../../hocs/withVariables';

const BACKGROUND_COLOR = '#222222';

class PageObabelie extends PureComponent {
  constructor(props) {
    super(props);
    this.canvas1 = React.createRef();
    this.canvas2 = React.createRef();

    this.original1 = document.createElement('canvas');
    this.original1.width = 500;
    this.original1.height = 500;

    this.original2 = document.createElement('canvas');
    this.original2.width = 500;
    this.original2.height = 500;

    const context1 = this.original1.getContext('2d');
    context1.fillStyle = "rgba(255,255,255,.5)";
    context1.beginPath();
    context1.arc(250, 250, 200, 0, 2 * Math.PI);
    context1.fill();

    const context2 = this.original2.getContext('2d');
    context2.fillStyle = "rgba(0,0,0,0.75)";
    context2.beginPath();
    context2.moveTo(250, 75);
    context2.lineTo(445, 415);
    context2.lineTo(55, 415);
    context2.fill();
  }

  render() {
    return (
      <>
        <GlitchedImage
          canvases={[
            [this.original1, () => this.canvas1.current],
            [this.original2, () => this.canvas2.current],
          ]}
        />

        <Header />

        <Main>
          <Graphics style={{ flex: '1' }} type="perspective">
            <Layer l="1">
              <div style={{ width: '80%', height: '80%', background: 'rgba(0,0,0,0.25)', margin: '10%' }} />
            </Layer>
            <Layer l="2">
              <canvas
                ref={this.canvas1}
                width="500"
                height="500"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </Layer>
          </Graphics>
          <Graphics style={{ flex: '1' }} type="perspective">
            <Layer l="1">
              <div style={{ width: '80%', height: '80%', background: 'rgba(255,255,255,0.25)', margin: '10%' }} />
            </Layer>
            <Layer l="2">
              <canvas
                ref={this.canvas2}
                width="500"
                height="500"
                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </Layer>
          </Graphics>
        </Main>
      </>
    );
  }
}

export default compose(
  connect((s) => ({ locale: s.locale })),
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(PageObabelie);
