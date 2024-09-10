import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    reset(state) {
      state.counter = 0;
    },
    add(state, action) {
      state.counter += Number(action.payload);
    },
    subtract(state, action) {
      state.counter -= Number(action.payload);
    },
    multiply(state, action) {
      state.counter *= Number(action.payload);
    },
    divide(state, action) {
      if (action.payload !== 0) {
        state.counter /= Number(action.payload);
      }
    },
  },
});

export default slice.reducer;
export const { reset,  add, subtract, multiply, divide } = slice.actions;
