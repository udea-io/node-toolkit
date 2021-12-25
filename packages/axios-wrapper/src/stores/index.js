import React from 'react';
import { Provider } from 'react-redux';

import createStore from './CreateStore';

export { default as ApiActions } from './AppApi/Actions';

/**
 * Export default reducers
 *
 * @returns {object} store object
 */

export const { store: ApiStore, sagaMiddleware } = createStore();

export const ApiProvider = () => <Provider store={ApiStore} />;

export default {
  ApiProvider,
  ApiStore,
  sagaMiddleware,
};
