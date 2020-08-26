import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sample } from 'lodash-es';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Main from '../../Main';
import Header from '../../Header';
import GlitchedImage from '../../GlitchedImage';
import withVariables from '../../../hocs/withVariables';
import shapes from './shapes';

const BACKGROUND_COLOR = '#222222';

class PageObabelie extends PureComponent {
  constructor(props) {
    super(props);
    this.canvas1 = React.createRef();
    this.canvas2 = React.createRef();
    this.state = {
      left: sample(shapes),
      right: sample(shapes),
    };
  }

  render() {
    return (
      <>
        <GlitchedImage
          canvases={[
            [this.state.left[0], () => this.canvas1.current],
            [this.state.right[0], () => this.canvas2.current],
          ]}
        />

        <Header />

        <Main>
          <Graphics style={{ flex: '1' }} type="parallax">
            <Layer l="1">
              <div style={{ width: '80%', height: '80%', background: this.state.left[1], margin: '10%' }} />
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
          <Graphics style={{ flex: '1' }} type="parallax">
            <Layer l="1">
              <div style={{ width: '80%', height: '80%', background: this.state.right[1], margin: '10%' }} />
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
