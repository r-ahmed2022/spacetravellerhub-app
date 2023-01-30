import {
  configureStore,
} from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import missionReducer from './Missions/mission';
import rocketReducer from './Rockets/rocket';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(logger),
});

export default store;
