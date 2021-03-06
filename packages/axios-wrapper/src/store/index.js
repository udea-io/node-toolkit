import React from 'react';
import { createSelectorHook, Provider } from 'react-redux';

import ApiStore from './Store';

export { default as ApiActions } from './AppApi/Actions';

export const ApiProvider = (prop) => <Provider store={ApiStore} {...prop} />;

export const context = React.createContext(null);

export const useSelector = createSelectorHook(context);

export default ApiStore;
