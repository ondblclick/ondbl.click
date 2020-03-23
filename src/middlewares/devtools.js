import history from '../history';

export default store => next => action => {
  if (action.type === 'DEVTOOLS:MESSAGE') {
    const match = action.payload.match(/goto\s(.*)/);
    if (match) history.push(match[1]);

    return;
  }

  return next(action);
};
