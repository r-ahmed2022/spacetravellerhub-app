import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  isLoading: false,
  missionList: [],
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
      const filtered = state.missionList?.map((mission) => ((mission.mission_id === action.payload) ? { ...mission, reserved: !mission.reserved } : mission));
      state.missionList = filtered;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LIST_MISSIONS.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LIST_MISSIONS.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missionList = action.payload.map((mission) => ({ ...mission, reserved: true }));
      return state;
    });
    builder.addCase(LIST_MISSIONS.rejected, (state, action) => {
      state.msg = action.payload;
    });
  },
});

export default missionSlice.reducer;
export const { JOIN_MISSION } = missionSlice.actions;
