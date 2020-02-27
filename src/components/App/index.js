import React, { PureComponent } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header';
import Button from '../Button';
import PageHome from '../Page/Home';
import PageSettings from '../Page/Settings';
import PageDearEsther from '../Page/DearEsther';

import './index.css';

let x = 0;
let y = 0;

const rect = document.querySelector('body').getBoundingClientRect();
const center = { x: Math.round(rect.width / 2), y: Math.round(rect.height / 2) };
const vars = document.querySelector('#perspective-vars');
const K = 15;
const F = 1;

document.addEventListener('mousemove', (e) => {
  x = e.pageX;
  y = e.pageY;

  const degX = (x - center.x) / rect.width * K;
  const degY = (y - center.y) / rect.height * K;

  vars.innerText = `:root {
    --deg-y: ${degX.toFixed(F)}deg;
    --deg-x: ${-degY.toFixed(F)}deg;
  }`;
});

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { fullscreen: false };
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.onFullscreenChange);
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

  render() {
    const { fullscreen } = this.state;

    return (
      <HashRouter>
        <Header>
          <Button to="/home" glyph="Home" size={24} style={{ marginRight: 'auto' }} color='rgba(255,255,255,.15)' />
          <Button to="/settings" glyph="Settings" size={24} color='rgba(255,255,255,.15)' />

          {fullscreen
            ? <Button onClick={this.onExitFullscreen} glyph="FullscreenExit" size={24} color='rgba(255,255,255,.15)' />
            : <Button onClick={this.onRequestFullscreen} glyph="Fullscreen" size={24} color='rgba(255,255,255,.15)' />}
        </Header>
        <div className="Content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={PageHome} />
            <Route exact path="/settings" component={PageSettings} />
            <Route exact path="/dear-esther" component={PageDearEsther} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
