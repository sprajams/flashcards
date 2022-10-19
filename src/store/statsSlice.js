import { createSlice } from "react-redux";

export const statsSlice = createSlice({
  name: "stats",
  initialState: { correct: 0, incorrect: 0 },
});
