import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignInStart: (state) => {
      state.loading = true;
    },
    userSignInSuccess: (state, action) => {
      (state.user = action.payload),
        (state.loading = false),
        (state.error = null);
    },
    userSignInFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
  },
});

export const { userSignInStart, userSignInSuccess, userSignInFailure } =
  userSlice.actions;

export default userSlice.reducer;
