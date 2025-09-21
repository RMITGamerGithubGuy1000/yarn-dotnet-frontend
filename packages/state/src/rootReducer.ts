import { combineReducers } from "@reduxjs/toolkit";
import { cookiesReducer } from "./slices/cookiesSlice";

export const rootReducer = combineReducers({
  cookies: cookiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
  