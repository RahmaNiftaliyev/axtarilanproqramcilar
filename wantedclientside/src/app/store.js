import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const storeBuilder = () => {return {reducer:rootReducer}}

const store = configureStore(storeBuilder());
export default store
