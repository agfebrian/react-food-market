import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    food: null,
    quantity: 0,
  },
  reducers: {
    setPayment: (state, action) => {
      (state.food = action.payload.food),
        (state.quantity = action.payload.quantity);
    },
  },
});

export const { setPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
