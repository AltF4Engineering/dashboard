import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    locations: [{ lat: 38, lon: -98 }],
    jumpTo: "",
  },
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setJumpTo: (state, action) => {
      state.jumpTo = action.payload;
    },
  },
});

export const { setLocations, setJumpTo } = mapSlice.actions;

export default mapSlice.reducer;
