import React, { PureComponent } from 'react';
import { compose } from 'redux';

import Main from '../../Main';
import Header from '../../Header';
import Footer from '../../Footer';
import Static from '../../Static';

class PageAchievements extends PureComponent {
  render() {
    return (
      <>
        <Header />

        <Main>
          <Static style={{ flex: '1', fontSize: '1.5rem' }}>
            {'.'}
          </Static>
        </Main>

        <Footer strings={this._strings} />
      </>
    );
  }
}

export default compose()(PageAchievements);
