import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userLogged: localStorage.getItem('jwt_token') || null,
  isAdmin: null,
  name: null
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isAdmin = action.payload.isAdmin;
      state.name = action.payload.name;
      localStorage.setItem('jwt_token', action.payload.token); 
      state.userLogged = action.payload.token;
    },
    logoutUser: (state) => {
      localStorage.removeItem("jwt_token");
      state.userLogged = false;
      state.isAdmin = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

// exporting selectors
export const selectUserLogged = state => state.auth.userLogged;
export const selectIsAdmin = (state) => state.auth.isAdmin;
export const selectName = (state) => state.auth.name;

export default authSlice.reducer;
