import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    ids: [],
    stats: {},
  },
  reducers: {
    start: (state, action) => {
      state.ids = [...action.payload.indexes]; // saves the new quiz ids
      state.stats = {}; // refresh stats
    },
    correct: (state, action) => {
      state.stats = {
        [action.payload.id]: action.payload.answer,
        ...state.stats,
      };
    },
    incorrect: (state, action) => {
      state.stats = {
        ...state.stats,
        [action.payload.id]: action.payload.answer,
      };
    },
    skip: (state, action) => {
      // remove skipped question id
      const temp = state.ids.splice(action.payload.activeIndex, 1);
      // add skipped question back at the end of the array
      state.ids = state.ids.concat(temp);
    },
  },
});
export const { start, correct, incorrect, skip } = quizSlice.actions;
export default quizSlice.reducer;
