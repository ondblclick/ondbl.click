import React, { PureComponent } from 'react';
import { compose } from 'redux';

// import Button from '../../Button';
import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Main from '../../Main';
import Header from '../../Header';
import Footer from '../../Footer';
// import Static from '../../Static';
import withVariables from '../../../hocs/withVariables';

const BACKGROUND_COLOR = '#222222';

class PageMagic8Ball extends PureComponent {
  render() {
    return (
      <>
        <Header />

        <Main>
          <Graphics type="perspective">
            <Layer l="1">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div style={{ width: '50vmin', height: '50vmin', border: '1px solid #555', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,.05)' }} />
              </div>
            </Layer>
            <Layer l="2">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div
                  style={{
                    width: '25vmin',
                    height: '25vmin',
                    border: '3px double #888',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,.5)',
                    cursor: 'pointer',
                    pointerEvents: 'all',
                  }}
                />
              </div>
            </Layer>
          </Graphics>
        </Main>

        <Footer strings={this._strings} />
      </>
    );
  }
}

export default compose(
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(PageMagic8Ball);
