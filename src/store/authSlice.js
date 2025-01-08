import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('loggedInUser')) || null,
  },
  reducers: {
    setLoggedInUser(state, action) {
      state.user = action.payload;
      localStorage.setItem('loggedInUser', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('loggedInUser');
    },
  },
});

export const { setLoggedInUser, logout } = authSlice.actions;
export default authSlice.reducer;
