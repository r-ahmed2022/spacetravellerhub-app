import {
  configureStore, combineReducers,
} from '@reduxjs/toolkit';
import missionReducer from './Missions/mission';
import rocketReducer from './Rockets/rocket';

const rootReducer = combineReducers({
  rocket: rocketReducer,
  mission: missionReducer,
});

const store = configureStore(
  { reducer: rootReducer },
);

export default store;
