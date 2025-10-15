import { createSlice } from "@reduxjs/toolkit";

interface userDetails {
  id: number;
  username?: string;
  email: string;
  password: string;
  confirm?: string;
}

interface AuthState {
  user: userDetails | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isAuthenticated: !!localStorage.getItem("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: { payload: userDetails }) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signIn: (state, action: { payload: userDetails }) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signOut: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { signUp, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
