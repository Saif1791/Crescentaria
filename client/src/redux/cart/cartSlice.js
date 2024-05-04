import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  userId: null,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const itemExists = state.items.some(
        (item) => item._id === action.payload._id
      );

      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (!itemExists) {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
        state.totalItems += 1;
      } else {
        state.items[itemIndex].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.totalItems -= 1;
    },
    updateCart: (state) => {
      state.value += 1;
    },
    decrementQuantity: (state, action) => {
      var index = 0;
      const search = state.items.forEach((item) => {
        if (item._id === action.payload) {
          index = state.items.indexOf(item);
        }
      });
      state.items[index].quantity -= 1;

      if (state.items[index].quantity < 1) {
        state.items = state.items.filter((item) => item._id !== action.payload);
        state.totalItems -= 1;
      }
    },
    updateQuantity: (state) => {
      state.quantity += 1;
    },
    addUserId: (state, action) => {
      state.userId = action.payload.userID;
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addtoCart,
  removeFromCart,
  updateCart,
  updateQuantity,
  addUserId,
  decrementQuantity,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
