import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state) => {
      state.value += 1;
    },
  },
});

export const { updateCart } = cartSlice.actions;
export default cartSlice.reducer;
