import { configureStore } from "@reduxjs/toolkit";

import layoutReducer from "./store/layoutSlice";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
  }
});

export default store;
