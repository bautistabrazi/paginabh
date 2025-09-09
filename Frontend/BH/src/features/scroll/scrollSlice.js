import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollY: 0,
  shrinkDistance: window.innerHeight * 0.25,
};

export const scrollSlice = createSlice({
  name: "scrolls",
  initialState,
  reducers: {
    setScroll: (state, action) => {
      state.scrollY = action.payload;
    },
    setShrinkDistance: (state, action) => {
      state.shrinkDistance = action.payload;
    },
  },
});

export const { setScroll, setShrinkDistance } = scrollSlice.actions;
export default scrollSlice.reducer;
