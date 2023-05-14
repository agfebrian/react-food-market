import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../slices/signupSlice";

export default configureStore({
  reducer: {
    signup: signupSlice,
  },
});
