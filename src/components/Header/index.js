import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../Toolbar';
import Button from '../Button';

import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      help: false,
    };
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.onFullscreenChange);
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.onFullscreenChange);
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    // 27 === ESC
    if (e.keyCode === 27 && this.state.help) {
      this.setState({ help: false });
    }
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

  onHelpOpen = () => {
    this.setState({ help: true });
  }

  onHelpClose = () => {
    this.setState({ help: false });
  }

  render() {
    const { fullscreen } = this.state;
    const { children, audio, muted, help } = this.props;
    console.log(help, this.state.help)

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
          {help
            && <Button isMuted onClick={this.onHelpOpen}>{'Help'}</Button>}
          {help && this.state.help
            && (
              <div className="Header__help" onClick={this.onHelpClose}>
                <div className="Header__help-contents" onClick={e => e.stopPropagation()}>
                  {help}
                </div>
              </div>)}
        </Toolbar>
      </>
    );
  }
}

export default connect((s) => ({ muted: s.muted }))(Header);
