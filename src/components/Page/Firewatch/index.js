import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Static from '../../Static';
import Main from '../../Main';
import Header from '../../Header';

import Chat from '../../Chat';
import withVariables from '../../../hocs/withVariables';
import { ReactComponent as HenrySvg1 } from './henry-1.svg';
import { ReactComponent as HenrySvg2 } from './henry-2.svg';
import _audio from './01.mp3';
import chat from './chat';

class PageFirewatch extends PureComponent {
  _audio = _audio

  render() {
    return (
      <>
        <Header
          audio={this._audio}
          help={(
            <>
              <div>{'# hit `space` to see the next chat message.'}</div>
              <div>{'# hit `esc` to close the help modal.'}</div>
              <div>{'# pick an option when prompted.'}</div>
            </>
          )}
        />

        <Main>
          <Static style={{ display: 'flex', alignItems: 'center', flex: '1', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Chat chat={chat} />
          </Static>
          <Graphics style={{ flex: '1.5' }} type="perspective">
            <Layer l="1">
              <HenrySvg1 width="100%" height="100%" fill="#000000" />
            </Layer>
            <Layer l="2">
              <HenrySvg2 width="100%" height="100%" fill="#000000" />
            </Layer>
          </Graphics>
        </Main>
      </>
    );
  }
}

export default compose(
  connect((s) => ({ locale: s.locale })),
  withVariables({ '--background-color': '#470D2D' }),
)(PageFirewatch);
