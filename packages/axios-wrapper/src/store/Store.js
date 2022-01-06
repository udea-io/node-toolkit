// eslint-disable-next-line import/no-import-module-exports
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

const reducers = require('./Reducers');

// Add middleware here
const middleware = [];
// Debug tool integration;
let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  // Use it if Remote debugging with RNDebugger, otherwise use remote-redux-devtools
  composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    // eslint-disable-next-line global-require
    require('remote-redux-devtools').composeWithDevTools
  )({
    name: `ApiRuntime`,
    trace: true,
    traceLimit: 10,
  });
}

// Create the store
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(...middleware)),
);

// Enable hot module replacement for reducers
if (module.hot) {
  module.hot.accept(async () => {
    const nextRootReducer = await import('./Reducers');
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
