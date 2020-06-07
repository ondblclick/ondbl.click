import React, { PureComponent } from 'react';
import { compose } from 'redux';

import Button from '../../Button';
import Main from '../../Main';
import Header from '../../Header';
import Footer from '../../Footer';
import Static from '../../Static';
import withVariables from '../../../hocs/withVariables';

const BACKGROUND_COLOR = '#222222';

class PageHome extends PureComponent {
  render() {
    return (
      <>
        <Header />

        <Main>
          <Static style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button to="/" isActive>{'Got lost?'}</Button>
          </Static>
        </Main>

        <Footer strings={this._strings} />
      </>
    );
  }
}

export default compose(
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(PageHome);
