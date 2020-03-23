import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../Toolbar';
import Button from '../Button';

import './index.css';

const BUTTON_COLOR = 'rgba(255, 255, 255, .15)';
const BUTTON_SIZE = 24;

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
              ? <Button onClick={this.onUnmute} glyph="VolumeOff" size={BUTTON_SIZE} color={BUTTON_COLOR} />
              : <Button onClick={this.onMute} glyph="VolumeUp" size={BUTTON_SIZE} color={BUTTON_COLOR} />
            : null}
          {fullscreen
            ? <Button onClick={this.onExitFullscreen} glyph="FullscreenExit" size={BUTTON_SIZE} color={BUTTON_COLOR} />
            : <Button onClick={this.onRequestFullscreen} glyph="Fullscreen" size={BUTTON_SIZE} color={BUTTON_COLOR} />}
        </Toolbar>
      </>
    );
  }
}

export default connect((s) => ({ muted: s.muted }))(Header);
