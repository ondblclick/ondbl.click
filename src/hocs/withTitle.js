import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default (title) => (Comp) => {
  class WithTitleWrapper extends Component {
    render() {
      return(
        <>
          <Helmet>
            <title>{title}</title>
          </Helmet>

          <Comp {...this.props} />
        </>
      );
    }
  }

  return WithTitleWrapper;
}
