/* eslint-disable max-len */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  isLoading: false,
  list: [],
  msg: '',
};

export const LIST_ROCKETS = createAsyncThunk('LIST_ROCKETS', async () => {
  const response = await fetch(rocketsUrl);
  return response.json();
});

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    JOIN_ROCKET: (state, action) => {
      const filtered = state.list?.map((rocket) => ((rocket.id === action.payload) ? { ...rocket, reserved: !rocket.reserved } : rocket));
      state.list = filtered;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LIST_ROCKETS.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LIST_ROCKETS.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload.map((rocket) => ({ ...rocket, reserved: true }));
      return state;
    });
    builder.addCase(LIST_ROCKETS.rejected, (state, action) => {
      state.msg = action.payload;
    });
  },
});

export default rocketSlice.reducer;
export const { JOIN_ROCKET } = rocketSlice.actions;
