import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const createStore = (preloadedState?: Partial<{ cookies: { count: number } }>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
