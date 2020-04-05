import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Static from '../../Static';
import Main from '../../Main';
import Header from '../../Header';
import Footer from '../../Footer';
import Chat from '../../Chat';
import withVariables from '../../../hocs/withVariables';
import { ReactComponent as HenrySvg } from './henry.svg';
import _audio from './01.mp3';
import chat from './chat';

class PageFirewatch extends PureComponent {
  _audio = _audio

  render() {
    return (
      <>
        <Header audio={this._audio} />

        <Main>
          <Static style={{ display: 'flex', alignItems: 'center', flex: '1', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Chat chat={chat} />
          </Static>
          <Graphics style={{ flex: '2' }} type="perspective">
            <Layer l="1">
              <HenrySvg width="100%" height="100%" fill="#000000" />
            </Layer>
          </Graphics>
        </Main>

        <Footer />
      </>
    );
  }
}

export default compose(
  connect((s) => ({ locale: s.locale })),
  withVariables({ '--background-color': '#470D2D' }),
)(PageFirewatch);
