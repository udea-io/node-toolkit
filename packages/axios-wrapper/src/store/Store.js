import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import reducers from './Reducers';

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

console.log(
    'reducers=>', reducers
)

// Create the store
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(...middleware)),
);

console.log(
    'store=>', store
)

export default store;
