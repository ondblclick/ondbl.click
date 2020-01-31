import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from "react-router-dom";

import { ReactComponent as Fullscreen } from './fullscreen.svg';

import './App.css';

let x = 0;
let y = 0;

const rect = document.querySelector('body').getBoundingClientRect();
const center = { x: Math.round(rect.width / 2), y: Math.round(rect.height / 2) };
const vars = document.querySelector('#vars');
const K = 5;
const F = 5;

document.addEventListener('mousemove', (e) => {
  x = e.pageX;
  y = e.pageY;

  const degX = (x - center.x) / rect.width * K;
  const degY = (y - center.y) / rect.height * K;

  vars.innerText = `:root { --deg-y: ${-degX.toFixed(F)}deg; --deg-x: ${degY.toFixed(F)}deg; }`;
});

class Player extends Component {
  render() {
    return (
      <>
        <Layer level="2">
          <div style={{ width: 320, height: 100, bottom: 0, left: 0, backgroundColor: 'blue', opacity: .85, position: 'absolute' }} />
        </Layer>
        <Layer level="2-25">
          <div style={{ width: 50, height: 50, backgroundColor: 'tomato', opacity: .85, position: 'absolute', bottom: 25, left: 25 }} />
        </Layer>
        <Layer level="2-25">
          <div style={{ width: 50, height: 50, backgroundColor: 'tomato', opacity: .85, position: 'absolute', bottom: 25, left: 100 }} />
        </Layer>
        <Layer level="2-25">
          <div style={{ width: 50, height: 50, backgroundColor: 'tomato', opacity: .85, position: 'absolute', bottom: 25, left: 175 }} />
        </Layer>
        <Layer level="2-25">
          <div style={{ width: 50, height: 50, backgroundColor: 'tomato', opacity: .85, position: 'absolute', bottom: 25, left: 250 }} />
        </Layer>
      </>
    );
  }
}

class Layer extends Component {
  render() {
    const { level, children } = this.props;

    return ReactDOM.createPortal(children, document.querySelector(`#level-${level}`));
  }
}

class PageIndex extends Component {
  render() {
    return (
      <>
        <Layer level="2">
          <div style={{ width: 300, height: 300, backgroundColor: 'blue', opacity: .85, right: 0, bottom: 0, position: 'absolute' }} />
        </Layer>
        <Layer level="1">
          <div style={{ width: '100%', height: '100%', backgroundColor: 'tomato', opacity: .85 }} />
        </Layer>
        <Layer level="2">
          <div style={{ width: 300, height: 300, backgroundColor: 'blue', opacity: .85 }} />
        </Layer>
        <Player />
      </>
    );
  }
}

class PageSettings extends Component {
  render() {
    return (
      <>
        <Layer level="1">
          <div style={{ width: '100%', height: '100%', backgroundColor: 'tomato', opacity: .85 }} />
        </Layer>
        <Player />
      </>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fullscreen: false };
  }

  onRequestFullscreen = () => {
    document
      .querySelector('body')
      .requestFullscreen()
      .then(() => this.setState({ fullscreen: true }));
  }

  onExitFullscreen = () => {
    document
      .exitFullscreen()
      .then(() => this.setState({ fullscreen: false }));
  }

  render() {
    return (
      <HashRouter>
        <Fullscreen
          className="App__fullscreen-icon"
          onClick={this.state.fullscreen
            ? this.onExitFullscreen
            : this.onRequestFullscreen}
        />
        <Switch>
          <Route exact path="/" component={PageIndex} />
          <Route exact path="/settings" component={PageSettings} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
