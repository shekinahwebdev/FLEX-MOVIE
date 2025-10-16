import { createSlice } from "@reduxjs/toolkit";

interface userDetails {
  id: number;
  username?: string;
  email: string;
  password: string;
  confirm?: string;
}

interface AuthState {
  users: userDetails[];
  activeUser: userDetails | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  activeUser: JSON.parse(localStorage.getItem("activeUser") || "null"),
  isAuthenticated: !!localStorage.getItem("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action: { payload: userDetails }) => {
      const newUser = action.payload;

      // Add user to the list of inital users
      state.users.push(newUser);

      // Set active user
      state.activeUser = newUser;
      state.isAuthenticated = true;

      // update the localStorage
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("activeUser", JSON.stringify(newUser));
    },
    signIn: (state, action: { payload: userDetails }) => {
      const { email, password } = action.payload;

      const existingUser = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        state.activeUser = existingUser;
        state.isAuthenticated = true;
        localStorage.setItem("activeUser", JSON.stringify(existingUser));
      } else {
        alert("Email and password not found");
      }
    },
    signOut: (state) => {
      state.activeUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem("activeUser");
    },
  },
});

export const { signUp, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
