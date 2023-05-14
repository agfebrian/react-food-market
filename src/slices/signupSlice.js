import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    setSignup: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setSignup } = signupSlice.actions;
export default signupSlice.reducer;
