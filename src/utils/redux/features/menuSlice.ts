import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FenceType } from "@/utils/types/fences";

interface InitialType {
  windows: FenceType[];
}

const initialState = {
  windows: [],
} as InitialType;

export const slice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    reset: () => initialState,
    addWindow: (state, action: PayloadAction<FenceType>) => {
      state.windows.push(action.payload);
    },
    removeWindow: (state, action: PayloadAction<string>) => {
      const temp = state.windows.filter((element) => {
        return element.id != action.payload;
      });
      state.windows = temp;
    },
  },
});

export const { addWindow, removeWindow, reset } = slice.actions;
export default slice.reducer;
