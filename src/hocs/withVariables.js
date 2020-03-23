import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default (vars) => (Comp) => {
  class WithVariables extends Component {
    render() {
      const str = Object.entries(vars).map(([k, v]) => `${k}: ${v};`);

      return(
        <>
          <Helmet>
            <style>{`:root { ${str} }`}</style>
          </Helmet>
          <Comp {...this.props} />
        </>
      );
    }
  }

  return WithVariables;
}
