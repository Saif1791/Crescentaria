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
    userUpdateStart: (state) => {
      state.loading = true;
    },
    userUpdateSuccess: (state, action) => {
      (state.user = action.payload),
        (state.loading = false),
        (state.error = null);
    },
    userUpdateFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
    userSignOutStart: (state) => {
      state.loading = true;
    },
    userSignOutSuccess: (state) => {
      (state.user = null), (state.loading = false), (state.error = null);
    },
    userSignOutFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
  },
});

export const {
  userSignInStart,
  userSignInSuccess,
  userSignInFailure,
  userUpdateFailure,
  userUpdateStart,
  userUpdateSuccess,
  userSignOutFailure,
  userSignOutStart,
  userSignOutSuccess,
} = userSlice.actions;

export default userSlice.reducer;
