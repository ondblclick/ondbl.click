import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { range } from 'lodash-es';

import Main from '../../Main';
import Header from '../../Header';

import withVariables from '../../../hocs/withVariables';
import { l } from './letter';

const BACKGROUND_COLOR = '#222222';

const COLS = 126;
const ROWS = 7;
const SIZE = 22;
const GAP = 4;

class Scarface extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pixels: this.textToPixels('WORLD IS YOURS '),
      offset: 0,
    };
  }

  componentDidMount() {
    setInterval(() => this.setState((s) => ({ offset: s.offset + 1 })), 30);
  }

  textToPixels = (text) => {
    const res = text.split('')
      .map((letter) => l(letter).split(' '));

    return range(0, res[0].length)
      .map((i) => res.map((j) => j[i]).join(''))
      .map((i) => i.split('').map((j) => `${j}${j}`).join(''));
  }

  render() {
    const { pixels, offset } = this.state;

    return (
      <>
        <Header audio={this._audio} />

        <Main>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)`, margin: 'auto', gridGap: GAP }}>
            {range(0, ROWS).map((y) => {
              return range(0, COLS).map((x) => {
                return (
                  <div
                    style={{
                      width: SIZE / 2 - GAP / 2,
                      height: SIZE,
                      backgroundColor: pixels[y][(x + offset) % pixels[0].length] === '1'
                        ? 'rgba(255,255,255,.2)'
                        : 'rgba(255,255,255,.025)' }}
                    data-index={`${x}-${y}`}
                    key={`${x}-${y}`}
                  />
                );
              });
            })}
          </div>
        </Main>
      </>
    );
  }
}

export default compose(
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(Scarface);
