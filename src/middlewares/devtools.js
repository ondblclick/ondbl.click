import history from '../history';

export default store => next => action => {
  if (action.type === 'DEVTOOLS:COMMAND') {
    const args = action.payload.split(' ');
    store.dispatch({ type: 'DEVTOOLS:MESSAGE', payload: `> ${action.payload}` });

    if (args[0] === 'goto') {
      history.push(args[1]);
      store.dispatch({ type: 'DEVTOOLS:MESSAGE', payload: `Navigated to ${args[1]}` });
    } else if (args[0] === 'set-config-item') {
      store.dispatch({ type: 'DEVTOOLS:SET_CONFIG_ITEM', payload: { [args[1]]: args[2] } });
      store.dispatch({ type: 'DEVTOOLS:MESSAGE', payload: `${args[1]} set to ${args[2]}` });
    } else if (args[0] === 'achievements') {
      history.push('achievements');
      store.dispatch({ type: 'DEVTOOLS:MESSAGE', payload: `Navigated to ************` });
    } else if (action.payload) {
      store.dispatch({ type: 'DEVTOOLS:MESSAGE', payload: `Unknown command: ${action.payload}` });
    }
  }

  return next(action);
};
