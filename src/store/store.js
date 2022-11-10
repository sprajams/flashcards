import { configureStore } from "@reduxjs/toolkit";
import bookmarksReducer from "./bookmarksSlice";
import quizReducer from "./quizSlice";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
  bookmarks: bookmarksReducer,
  quiz: quizReducer,
});
// whitelist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["bookmarks"], // only allow bookmarks state to persist
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
