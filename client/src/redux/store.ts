import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
});

export default store;
