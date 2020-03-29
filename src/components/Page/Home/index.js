import React, { PureComponent } from 'react';
import { compose } from 'redux';

import Main from '../../Main';
import Header from '../../Header';
import Footer from '../../Footer';
import Static from '../../Static';
import withVariables from '../../../hocs/withVariables';

class PageHome extends PureComponent {
  render() {
    return (
      <>
        <Header audio={this._audio} />

        <Main>
          <Static style={{ flex: '1' }}>
            {'This is just a memory journey.'}
          </Static>
        </Main>

        <Footer strings={this._strings} />
      </>
    );
  }
}

export default compose(
  withVariables({ '--background-color': '#222222' }),
)(PageHome);
