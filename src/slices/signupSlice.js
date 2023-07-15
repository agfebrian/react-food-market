import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    name: "",
    email: "",
    previewAvatar: "",
    blobAvatar: null,
    password: "",
  },
  reducers: {
    setSignup: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setAvatar: (state, action) => {
      state.previewAvatar = action.payload.previewAvatar;
      state.blobAvatar = action.payload.blobAvatar;
    },
  },
});

export const { setSignup, setAvatar } = signupSlice.actions;
export default signupSlice.reducer;
