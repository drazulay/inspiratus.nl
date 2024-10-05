import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    mediaSize: "desktop",
    showText: true,
    userHasScrolled: false,
  },
  reducers: {
    toggleShowText(state) {
      state.showText = !state.showText;
    },
    setShowText(state, action) {
      state.showText = action.payload;
    },
    setMediaSize(state, action) {
      state.mediaSize = action.payload;
    },
    setUserHasScrolled(state, action) {
      console.log('User has scrolled');
      state.userHasScrolled = action.payload;
    }
  }
});

export const {
  toggleShowText,
  setShowText,
  setMediaSize ,
  setUserHasScrolled
} = layoutSlice.actions;

export default layoutSlice.reducer;
