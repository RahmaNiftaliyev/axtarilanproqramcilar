import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const storeBuilder = (paramsRootReducer) => {
  return {
    reducer: paramsRootReducer ? paramsRootReducer : {},
  };
};

const store = configureStore(storeBuilder(rootReducer));
export default store;
