import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    data: [],
    stats: {},
  },
  reducers: {
    fetchQuiz: (state, action) => {
      state.data = [...action.payload.quizArr]; // saves the new quiz data
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
      const temp = state.data.splice(action.payload.activeIndex, 1);
      // add skipped question back at the end of the array
      state.data = state.data.concat(temp);
    },
  },
});
export const { fetchQuiz, correct, incorrect, skip } = quizSlice.actions;
export default quizSlice.reducer;
