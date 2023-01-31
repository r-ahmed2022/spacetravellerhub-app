import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/missions';

const GET_MISSION = 'GET_MISSION';

const getMissionAction = createAsyncThunk(
  GET_MISSION,
  async (post, { dispatch }) => {
    const response = await fetch(URL);
    const data = await response.json();
    const mission = data;

    dispatch({
      type: GET_MISSION,
      payload: mission,
    });
  },
);

const missionReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_MISSION: return action.payload;
    default: return state;
  }
};

export { getMissionAction };
export default missionReducer;
