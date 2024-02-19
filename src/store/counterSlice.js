import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload || 1; // If no payload, increment by 1
    },
    decrement: (state, action) => {
      state.count -= action.payload || 1; // If no payload, decrement by 1
      if (state.count < 0) state.count = 0; // Ensure count doesn't go below 0
    },
    reset: state => {
      state.count = 0;
    }
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
