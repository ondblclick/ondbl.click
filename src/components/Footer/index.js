import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../Toolbar';
import Button from '../Button';

import './index.css';

const BUTTON_COLOR = 'rgba(255, 255, 255, .15)';

class Footer extends Component {
  render() {
    const { children } = this.props;

    return (
      <Toolbar className="Footer">
        {children}
        {this.props.strings
          ? Object.keys(this.props.strings).map((string) => {
            return <Button
              key={string}
              disabled={this.props.locale === string}
              active={this.props.locale === string}
              size={14}
              color={BUTTON_COLOR}
              onClick={() => this.props.dispatch({ type: 'LOCALE:CHANGE_LOCALE', payload: string })}
            >
              {string}
            </Button>;
          })
          : null}
      </Toolbar>
    );
  }
}

export default connect((s) => ({ locale: s.locale }))(Footer);
