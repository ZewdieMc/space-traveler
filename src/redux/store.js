import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

export default (preloadedState) => configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState,
});
