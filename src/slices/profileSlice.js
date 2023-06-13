import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    id: "",
    name: "",
    email: "",
    address: "",
    city: "",
    phoneNumber: "",
    houseNumber: "",
  },
  reducers: {
    setProfile: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.phoneNumber = action.payload.phoneNumber;
      state.houseNumber = action.payload.houseNumber;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
