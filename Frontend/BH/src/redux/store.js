import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "../features/scroll/scrollSlice";

export const store = configureStore({
  reducer: { scrolls: scrollReducer },
});
