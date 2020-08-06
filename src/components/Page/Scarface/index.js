import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { range } from 'lodash-es';

import Main from '../../Main';
import Header from '../../Header';

import withVariables from '../../../hocs/withVariables';
import { l } from './letter';

const BACKGROUND_COLOR = '#222222';

const COLS = 126;
const ROWS = 9;
const SIZE = 24;
const GAP = SIZE / 6;
const CANVAS_WIDTH = COLS * (SIZE / 2) + (COLS - 1) * GAP;
const CANVAS_HEIGHT = ROWS * SIZE + (ROWS - 1) * GAP;

class Scarface extends PureComponent {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      pixels: this.textToPixels('WORLD IS YOURS.. '),
      offset: 0,
      rows: range(0, ROWS),
      cols: range(0, COLS),
    };
  }

  componentDidMount() {
    const { pixels } = this.state;

    this.draw();
    setInterval(() => this.setState((s) => ({ offset: (s.offset + 1) % pixels[0].length })), 30);
  }

  draw = () => {
    const { pixels, offset, rows, cols } = this.state;
    const context = this.canvas.current.getContext('2d');

    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    rows.forEach((y) => {
      cols.forEach((x) => {
        if (pixels[y][(x + offset) % pixels[0].length] === '1') {
          context.fillStyle = 'rgba(255,255,255,0.3)';
          // context.beginPath();
          // context.arc(
          //   (x * SIZE / 2) + x * GAP + SIZE / 4,
          //   y * SIZE + y * GAP + SIZE / 4,
          //   SIZE / 5,
          //   0,
          //   2 * Math.PI);
          // context.arc(
          //   (x * SIZE / 2) + x * GAP + SIZE / 4,
          //   y * SIZE + y * GAP + SIZE * 3 / 4,
          //   SIZE / 5,
          //   0,
          //   2 * Math.PI);
          // context.fill();
          context.fillRect((x * SIZE / 2) + x * GAP, y * SIZE + y * GAP, SIZE / 2, SIZE);
        } else {
          context.fillStyle = 'rgba(255,255,255,0.01)';
          context.fillRect((x * SIZE / 2) + x * GAP, y * SIZE + y * GAP, SIZE / 2, SIZE);
        }
      });
    });

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
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(Scarface);
