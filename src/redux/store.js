import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';
import dragonsReducer from './dragons/dragonsSlice';
import missionsReducer from './missions/missionsSlice';

export default (preloadedState) => configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState,
});
