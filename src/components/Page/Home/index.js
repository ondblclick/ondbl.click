import React, { PureComponent } from 'react';
import { compose } from 'redux';

import Main from '../../Main';
import Header from '../../Header';

import Static from '../../Static';
import TextGlitch from '../../TextGlitch';
import withVariables from '../../../hocs/withVariables';

const BACKGROUND_COLOR = '#222222';
const FOREGROUND_COLOR = '#ffffff';

class PageHome extends PureComponent {
  render() {
    return (
      <>
        <Header audio={this._audio} />

        <Main>
          <Static style={{ flex: '1', fontSize: '1.5rem' }}>
            <TextGlitch
              foregroundColor={FOREGROUND_COLOR}
              backgroundColor={BACKGROUND_COLOR}
            >
              {'This is just a memory journey.'}
            </TextGlitch>
          </Static>
        </Main>
      </>
    );
  }
}

export default compose(
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(PageHome);
