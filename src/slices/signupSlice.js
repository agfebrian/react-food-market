import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    fullName: "",
    email: "",
    password: "",
  },
  reducers: {
    setSignup: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setSignup } = signupSlice.actions;
export default signupSlice.reducer;
