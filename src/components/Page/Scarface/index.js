import React, { Component } from 'react';
import { compose } from 'redux';
import { range } from 'lodash-es';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';

import Main from '../../Main';
import Header from '../../Header';
import withVariables from '../../../hocs/withVariables';
import { l } from './letter';
import _audio from './01.mp3';

const BACKGROUND_COLOR = '#152238';

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
  _audio = _audio

  constructor(props) {
    super(props);
    const query = qs.parse(props.location.search);

    this.frame = null;
    this.interval = null;
    this.canvas = React.createRef();
    this.state = {
      pixels: this.textToPixels(query.text?.toUpperCase() || ' THE WORLD IS YOURS.. '),
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
    this.interval = setInterval(() => { offset = (offset + 1) % pixels[0].length }, 30);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    cancelAnimationFrame(this.frame);
  }

  draw = () => {
    const { pixels, rows, cols } = this.state;
    const rowLength = pixels[0].length;
    if (DEBUG) console.time('frame');

    const context = this.canvas.current.getContext('2d');

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    rows.forEach((y) => {
      cols.forEach((x) => {
        if (pixels[y][(x + offset) % rowLength] === '1') {
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

    this.frame = requestAnimationFrame(this.draw);
  }

  textToPixels = (text) => {
    const res = text.split('')
      .map((letter) => (l(letter) || l('#')).split(' '));

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
          <div style={{
            width: '100%',
            padding: '15vmin 0',
            margin: 'auto',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
            <canvas ref={this.canvas} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} style={{ width: '100%' }} />
          </div>
        </Main>
      </>
    );
  }
}

export default compose(
  withRouter,
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(Scarface);
