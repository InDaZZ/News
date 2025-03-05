import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import { reducer as rollReducer } from './Products/rollSlice';
import { reducer as newsReucer } from "./Slices/News";

const reducers = combineReducers({
  News: newsReucer,
});

export const store = configureStore({
  reducer: reducers,
});
