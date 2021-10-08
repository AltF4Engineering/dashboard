import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    locations: [{ lat: 38, lon: -98 }],
  },
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
  },
});

export const { setLocations } = mapSlice.actions;

export default mapSlice.reducer;
