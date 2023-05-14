import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    show: false,
    message: "",
    type: "success",
  },
  reducers: {
    setAlert: (state, actions) => {
      state.show = actions.payload.show;
      state.message = actions.payload.message;
      state.type = actions.payload.type;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
