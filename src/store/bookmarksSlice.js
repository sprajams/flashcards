import { createSlice } from "@reduxjs/toolkit";

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: { data: [] },
  reducers: {
    add: (state, action) => {
      state.data = [...state.data, action.payload.data];
    },
    remove: (state, action) => {
      if (
        state.data.findIndex((elem) => elem.id === action.payload.index) >= 0
      ) {
        state.data.splice(state.data.indexOf(action.payload.index), 1);
      }
    },
  },
});
export const { add, remove } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
