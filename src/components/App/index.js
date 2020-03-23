import React, { PureComponent } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import Devtools from '../Devtools';
import PageHome from '../Page/Home';
import PageDearEsther from '../Page/DearEsther';
import PageFirewatch from '../Page/Firewatch';
import { store, persistor } from '../../store';
import history from '../../history';

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
  const translateX = (x - center.x) / rect.width * K;
  const translateY = (y - center.y) / rect.height * K;

  vars.innerText = `:root {
    --deg-y: ${degX.toFixed(F)}deg;
    --deg-x: ${-degY.toFixed(F)}deg;
    --translate-x-delta: ${translateX.toFixed(F)}px;
    --translate-y-delta: ${translateY.toFixed(F)}px;
  }`;
});

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter history={history}>
            <Devtools />
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route exact path="/dear-esther" component={PageDearEsther} />
              <Route exact path="/firewatch" component={PageFirewatch} />
            </Switch>
          </HashRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
