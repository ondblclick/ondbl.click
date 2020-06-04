import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default (vars) => (Comp) => {
  class WithVariablesWrapper extends Component {
    render() {
      const str = Object.entries(vars).map(([k, v]) => `${k}: ${v};`).join('\n');

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

  return WithVariablesWrapper;
}
