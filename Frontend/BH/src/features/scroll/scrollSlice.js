import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollY: 0,
  distance: window.innerHeight,
};

export const scrollSlice = createSlice({
  name: "scrolls",
  initialState,
  reducers: {
    setScroll: (state, action) => {
      state.scrollY = action.payload;
    },
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
  },
});

export const { setScroll, setDistance } = scrollSlice.actions;
export default scrollSlice.reducer;
