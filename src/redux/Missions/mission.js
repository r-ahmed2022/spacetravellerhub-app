// import { createAsyncThunk } from '@reduxjs/toolkit';

// const URL = 'https://api.spacexdata.com/v3/missions';

// const GET_MISSION = 'GET_MISSION';

// const getMissionAction = createAsyncThunk(
//   GET_MISSION,
//   async (post, { dispatch }) => {
//     const response = await fetch(URL);
//     const data = await response.json();
//     const mission = data;

//     dispatch({
//       type: GET_MISSION,
//       payload: mission,
//     });
//   },
// );

// const missionReducer = (state = [], action = {}) => {
//   switch (action.type) {
//     case GET_MISSION: return action.payload
//     default: return state;
//   }
// };

// export { getMissionAction };
// export default missionReducer;

/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  isLoading: false,
  list: [],
  msg: '',
};

export const LIST_MISSIONS = createAsyncThunk('LIST_MISSIONS', async () => {
  const response = await fetch(missionsUrl);
  return response.json();
});

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    JOIN_MISSION: (state, action) => {
      const filtered = state.list?.map((mission) => ((mission.mission_id === action.payload) ? { ...mission, reserved: !mission.reserved } : mission));
      state.list = filtered;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LIST_MISSIONS.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LIST_MISSIONS.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload.map((mission) => ({ ...mission, reserved: true }));
      return state;
    });
    builder.addCase(LIST_MISSIONS.rejected, (state, action) => {
      state.msg = action.payload;
    });
  },
});

export default missionSlice.reducer;
export const { JOIN_MISSION } = missionSlice.actions;

