import { createSlice } from "@reduxjs/toolkit";

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    add: (state, action) => {
      if (state.indexOf(action.payload.index) === -1) {
        state.push(action.payload.index);
      }
    },
    remove: (state, action) => {
      if (state.indexOf(action.payload.index) >= 0) {
        state.splice(state.indexOf(action.payload.index), 1);
      }
    },
  },
});
export const { add, remove } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
