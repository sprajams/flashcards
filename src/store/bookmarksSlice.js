import { createSlice } from "@reduxjs/toolkit";

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: { data: [], id: [] },
  reducers: {
    add: (state, action) => {
      // catch for when state.data is undefined, and sub in and empty array to spread
      state.data = [...(state.data ?? []), action.payload.data];
      state.id = [...(state.id ?? []), action.payload.index];
    },
    remove: (state, action) => {
      if (state.id.includes(action.payload.index)) {
        state.id.splice(state.data.indexOf(action.payload.index), 1);
      }
    },
  },
});
export const { add, remove } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
