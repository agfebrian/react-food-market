import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../slices/signupSlice";
import alertSlice from "../slices/alertSlice";

export default configureStore({
  reducer: {
    alert: alertSlice,
    signup: signupSlice,
  },
});
