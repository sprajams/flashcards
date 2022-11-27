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
  },
});
export const { start, correct, incorrect } = quizSlice.actions;
export default quizSlice.reducer;
