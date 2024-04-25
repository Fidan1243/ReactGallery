import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URI = "http://localhost:5000/images/";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const imageSlice = createSlice({
  name: "image",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const fetchImages = createAsyncThunk("images/fetch", async () => {
  const dt = fetch(`${API_URI}`)
    .then((res) => res.json())
    .then((data) => {
        console.log('from slice');
        console.log(data);
    });
  return dt;
});

export const postImages = createAsyncThunk("images/fetch", async (formData,token) => {
  axios.post("http://localhost:5000/images", formData, {
    headers: {
      "Contetnt-Type": "multipart/form-data",
      token: token,
    },
  }).then(a=>{
      console.log(a);
  });
});

export default imageSlice.reducer;
