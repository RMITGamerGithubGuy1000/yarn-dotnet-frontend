import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CookiesState {
  count: number;
}

const initialState: CookiesState = { count: 0 };

const cookiesSlice = createSlice({
  name: "cookies",
  initialState,
  reducers: {
    increment: (state) => { state.count += 1 },
    reset: (state) => { state.count = 0 },
    setCount: (state, action: PayloadAction<number>) => { state.count = action.payload },
  },
});

export const { increment, reset, setCount } = cookiesSlice.actions;
export const cookiesReducer = cookiesSlice.reducer;
