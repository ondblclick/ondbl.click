import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash-es';

import Toolbar from '../Toolbar';
import Button from '../Button';

import './index.css';

const BUTTON_COLOR = 'rgba(255, 255, 255, .15)';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.onFullscreenChange);
  }

  componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.onFullscreenChange);
  }

  onFullscreenChange = () => {
    this.setState({ fullscreen: !!document.fullscreenElement });
  }

  onRequestFullscreen = () => {
    document
      .querySelector('body')
      .requestFullscreen();
  }

  onExitFullscreen = () => {
    document
      .exitFullscreen();
  }

  onMute = () => {
    this.props.dispatch({ type: 'AUDIO:MUTED', payload: true });
  }

  onUnmute = () => {
    this.props.dispatch({ type: 'AUDIO:MUTED', payload: false });
  }

  render() {
    const { fullscreen } = this.state;
    const { children, audio, muted } = this.props;

    return (
      <>
        <audio src={audio} muted={muted} autoPlay loop />
        <Toolbar className="Header">
          {children}
          {audio
            ? muted
              ? <Button onClick={this.onUnmute} color={BUTTON_COLOR}>{'Unmute'}</Button>
              : <Button onClick={this.onMute} color={BUTTON_COLOR}>{'Mute'}</Button>
            : null}
          {fullscreen
            ? <Button onClick={this.onExitFullscreen} color={BUTTON_COLOR}>{'Exit fullscreen'}</Button>
            : <Button onClick={this.onRequestFullscreen} color={BUTTON_COLOR}>{'Enter fullscreen'}</Button>}
          <Button onClick={noop} color={BUTTON_COLOR}>{'Help'}</Button>
        </Toolbar>
      </>
    );
  }
}

export default connect((s) => ({ muted: s.muted }))(Header);
