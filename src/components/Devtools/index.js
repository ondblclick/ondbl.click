import React, { createRef, Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

class Devtools extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onInputBlur = () => {
    this.input.current.focus();
  }

  onKeyDown = (e) => {
    this.props.devtools_active && e.stopPropagation();

    if (e.keyCode === 192 && !this.props.devtools_active) {
      e.preventDefault();
      return this.props.dispatch({ type: 'DEVTOOLS:SET_ACTIVE', payload: true });
    }
    if (e.keyCode === 192 && this.props.devtools_active) {
      return this.props.dispatch({ type: 'DEVTOOLS:SET_ACTIVE', payload: false });
    }
    if (e.keyCode === 13 && this.props.devtools_active) {
      this.props.dispatch({ type: 'DEVTOOLS:COMMAND', payload: this.input.current.value });
      this.input.current.value = '';
      return;
    }
    if (e.keyCode === 75 && e.metaKey) {
      this.props.dispatch({ type: 'DEVTOOLS:CLEAR_MESSAGES' });
      return;
    }
  }

  render() {
    const { backgroundColor, messages } = this.props;
    if (!this.props.devtools_active) return null;

    return (
      <div className="Devtools" style={{ backgroundColor }}>
        <div className="Devtools__log">
          {messages.length
            ? [...messages].reverse().map((m, index) => <div key={`${m}-${index}`}>{m}</div>)
            : <div>{'Empty.'}</div>}
        </div>
        <input
          ref={this.input}
          className="Devtools__input"
          type="text"
          autoFocus
          onBlur={this.onInputBlur}
        />
      </div>
    );
  }
}

Devtools.propTypes = {};

Devtools.defaultProps = {};

export default connect((s) => ({
  devtools_active: s.devtools_active,
  messages: s.devtools_messages,
  backgroundColor: s.devtools_config_items?.['devtools-background-color'],
}))(Devtools);
