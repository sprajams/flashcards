import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    ids: [],
    stats: {},
  },
  reducers: {
    start: (state, action) => {
      return { ...state, ids: action.payload.indexes };
    },
    correct: (state, action) => {
      state.stats = {
        ...state.stats,
        [action.payload.id]: action.payload.answer,
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
