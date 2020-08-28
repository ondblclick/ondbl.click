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

import './index.css';

const SHAPES = Object.keys(shapes);
const BACKGROUND_COLOR = '#222222';

class PageObabelie extends PureComponent {
  constructor(props) {
    super(props);
    this.canvas1 = React.createRef();
    this.canvas2 = React.createRef();
    this.state = {
      left: sample(SHAPES),
      right: sample(SHAPES),
    };
  }

  render() {
    return (
      <>
        <GlitchedImage
          shapes={shapes}
          canvases={[
            [this.state.left, () => this.canvas1.current],
            [this.state.right, () => this.canvas2.current],
          ]}
        />

        <Header />

        <Main>
          <Graphics style={{ flex: '1', marginLeft: '5vw' }} type="parallax">
            <Layer l="1">
              <div
                className="PageObabelie__backdrop"
                style={{ background: shapes[this.state.left][1] }}
                onClick={() => this.setState({ left: sample(SHAPES.filter((i) => i !== this.state.left)) })}
              />
            </Layer>
            <Layer l="2">
              <canvas
                ref={this.canvas1}
                width="500"
                height="500"
                className="PageObabelie__canvas"
              />
            </Layer>
          </Graphics>
          <Graphics style={{ flex: '1', marginRight: '5vw' }} type="parallax">
            <Layer l="1">
              <div
                className="PageObabelie__backdrop"
                style={{ background: shapes[this.state.right][1] }}
                onClick={() => this.setState({ right: sample(SHAPES.filter((i) => i !== this.state.right)) })}
              />
            </Layer>
            <Layer l="2">
              <canvas
                ref={this.canvas2}
                width="500"
                height="500"
                className="PageObabelie__canvas"
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
