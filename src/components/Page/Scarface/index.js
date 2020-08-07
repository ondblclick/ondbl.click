import React, { Component } from 'react';
import { compose } from 'redux';
import { range } from 'lodash-es';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';

import Main from '../../Main';
import Header from '../../Header';

import withVariables from '../../../hocs/withVariables';
import { l } from './letter';

const BACKGROUND_COLOR = '#02050A';

const COLS = 126;
const ROWS = 9;
const WIDTH = 6;
const HEIGHT = 12;
const GAP_X = WIDTH / 6;
const GAP_Y = HEIGHT / 6;
const CANVAS_WIDTH = COLS * WIDTH + (COLS - 1) * GAP_X;
const CANVAS_HEIGHT = ROWS * HEIGHT + (ROWS - 1) * GAP_Y;
const DOT_RADIUS = WIDTH / 3.5;
const PI_X2 = 2 * Math.PI;
const DEBUG = false;

let offset = 0;

class Scarface extends Component {
  constructor(props) {
    super(props);
    const query = qs.parse(props.location.search);

    this.canvas = React.createRef();
    this.state = {
      pixels: this.textToPixels(query.text.toUpperCase() || 'WORLD IS YOURS.. '),
      rows: range(0, ROWS),
      cols: range(0, COLS),
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { pixels } = this.state;

    this.draw();
    setInterval(() => { offset = (offset + 1) % pixels[0].length }, 30);
  }

  draw = () => {
    const { pixels, rows, cols } = this.state;
    if (DEBUG) console.time('frame');

    const context = this.canvas.current.getContext('2d');

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    rows.forEach((y) => {
      cols.forEach((x) => {
        if (pixels[y][(x + offset) % pixels[0].length] === '1') {
          context.fillStyle = 'rgba(255,255,255,0.3)';
          const xPos = (x * WIDTH) + x * GAP_X + WIDTH / 2;
          const yPosBasis = y * HEIGHT + y * GAP_Y;

          context.beginPath();
          context.fillStyle = x % 2 === 0
            ? '#607F87'
            : '#87C7BF';
          context.arc(
            xPos,
            yPosBasis + HEIGHT * 1 / 4 - 1,
            DOT_RADIUS,
            0,
            PI_X2);
          context.fill();

          context.beginPath();
          context.fillStyle = x % 2 === 0
            ? '#CA1B3D'
            : '#FEEAD4';
          context.arc(
            xPos,
            yPosBasis + HEIGHT * 3 / 4 + 1,
            DOT_RADIUS,
            0,
            PI_X2);
          context.fill();
        }
      });
    });

    if (DEBUG) console.timeEnd('frame');

    requestAnimationFrame(this.draw);
  }

  textToPixels = (text) => {
    const res = text.split('')
      .map((letter) => l(letter).split(' '));

    return range(0, res[0].length)
      .map((i) => res.map((j) => j[i]).join(''))
      .map((i) => i.split('').map((j) => `${j}${j}`).join(''));
  }

  render() {
    console.log('render');

    return (
      <>
        <Header audio={this._audio} />

        <Main>
          <canvas ref={this.canvas} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} style={{ width: '100%', margin: 'auto' }} />
        </Main>
      </>
    );
  }
}

export default compose(
  withRouter,
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(Scarface);
