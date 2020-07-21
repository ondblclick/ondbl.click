import React, { PureComponent, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import Devtools from '../Devtools';
import Main from '../Main';
import Static from '../Static';
import PageHome from '../Page/Home';
import PageDearEsther from '../Page/DearEsther';
import PageFirewatch from '../Page/Firewatch';
import PageMagic8Ball from '../Page/Magic8Ball';
import PageEye from '../Page/Eye';
import PageNotFound from '../Page/NotFound';
import { store, persistor } from '../../store';
import history from '../../history';
import withTitle from '../../hocs/withTitle';
import { ROUTES } from '../../constants/paths';

import './index.css';

let x = 0;
let y = 0;

const root = document.documentElement;
const rect = document.querySelector('body').getBoundingClientRect();
const center = { x: Math.round(rect.width / 2), y: Math.round(rect.height / 2) };
const K = 16;
const F = 1;

// a.map((i, index) => `${((100 / a.length) * index).toFixed(1)}% { --raw-x: 1.75 * ${i[0].toFixed(1)}; --raw-y: 1.75 * ${i[1].toFixed(1)}; }`)

// document.addEventListener('mousedown', (e) => {
//   x = e.pageX;
//   y = e.pageY;

//   const rawX = (x - center.x) / rect.width * K;
//   const rawY = (y - center.y) / rect.height * K;

//   console.log(rawX, rawY);
// });

root.addEventListener('mousemove', e => {
  x = e.pageX;
  y = e.pageY;

  const rawX = (x - center.x) / rect.width * K;
  const rawY = (y - center.y) / rect.height * K;

  root.style.setProperty('--raw-x', rawX.toFixed(F));
  root.style.setProperty('--raw-y', rawY.toFixed(F));
});

class Loading extends PureComponent {
  render() {
    return (
      <Main>
        <Static>
          {'Loading...'}
        </Static>
      </Main>
    );
  }
}

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Router history={history}>
            <Devtools />
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path={ROUTES.ROOT} component={PageHome} />
                <Route exact path={ROUTES.DEAR_ESTHER} component={PageDearEsther} />
                <Route exact path={ROUTES.FIREWATCH} component={PageFirewatch} />
                <Route exact path={ROUTES.MAGIC_8_BALL} component={PageMagic8Ball} />
                <Route exact path={ROUTES.EYE} component={PageEye} />
                <Route component={PageNotFound} />
              </Switch>
            </Suspense>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default withTitle('This is just a memory journey')(App);
