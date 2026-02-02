import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/entities";

interface AuthState {
  isAuth: boolean;
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  isAuth: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
