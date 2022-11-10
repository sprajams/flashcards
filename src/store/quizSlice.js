import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    ids: [],
  },
  reducers: {
    start: (state, action) => {
      return { ...state, ids: action.payload.indexes };
    },
  },
});
export const { start } = quizSlice.actions;
export default quizSlice.reducer;
