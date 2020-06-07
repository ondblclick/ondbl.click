import React, { Component } from 'react';
import { connect } from 'react-redux';
import { noop } from 'lodash-es';

import Toolbar from '../Toolbar';
import Button from '../Button';

import './index.css';

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
              ? <Button isMuted onClick={this.onUnmute}>{'Unmute'}</Button>
              : <Button isMuted onClick={this.onMute}>{'Mute'}</Button>
            : null}
          {fullscreen
            ? <Button isMuted onClick={this.onExitFullscreen}>{'Exit fullscreen'}</Button>
            : <Button isMuted onClick={this.onRequestFullscreen}>{'Enter fullscreen'}</Button>}
          <Button isMuted onClick={noop}>{'Help'}</Button>
        </Toolbar>
      </>
    );
  }
}

export default connect((s) => ({ muted: s.muted }))(Header);
