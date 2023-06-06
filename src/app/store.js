import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../slices/signupSlice";
import alertSlice from "../slices/alertSlice";
import profileSlice from "../slices/profileSlice";

export default configureStore({
  reducer: {
    alert: alertSlice,
    signup: signupSlice,
    profile: profileSlice,
  },
});
