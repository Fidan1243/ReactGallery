import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    add(state, action) {
      console.log("jfjfj");
      state.token = action.payload;
      console.log(action.payload);
    },
  },
});

export const { add } = tokenSlice.actions;
export default tokenSlice.reducer;
