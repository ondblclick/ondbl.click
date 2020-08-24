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
  render() {
    return (
      <>
        <Header />

        <Main>
          <Graphics style={{ flex: '1' }} type="perspective">
            <Layer l="1">
              <div style={{ width: '80%', height: '80%', background: 'rgba(0,0,0,0.25)', margin: '10%' }} />
            </Layer>
            <Layer l="2">
              <GlitchedImage
                color="rgba(255,255,255,.5)"
                shape="circle"
              />
            </Layer>
          </Graphics>
          <Graphics style={{ flex: '1' }} type="perspective">
            <Layer l="1">
              <div style={{ width: '80%', height: '80%', background: 'rgba(255,255,255,0.25)', margin: '10%' }} />
            </Layer>
            <Layer l="2">
              <GlitchedImage
                color="rgba(0,0,0,0.75)"
                shape="trinagle"
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
