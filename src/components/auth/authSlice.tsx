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
  errorMg: string | null;
}

const initialState: AuthState = {
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  activeUser: JSON.parse(localStorage.getItem("activeUser") || "null"),
  isAuthenticated: !!localStorage.getItem("user"),
  errorMg: null,
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
    checkEmail: (state, action: { payload: string }) => {
      const email = action.payload;
      const userExists = state.users.find((user) => user.email === email);

      if (!userExists) {
        state.errorMg = "Email not found. Please sign up.";
      } else {
        state.activeUser = userExists;
        state.isAuthenticated = true;
        localStorage.setItem("activeUser", JSON.stringify(userExists));
        state.errorMg = null;
      }

      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // const newErrors: FormErrors = { email: "", password: "" };
      // if (!email){
      //   newErrors.email = "Email is required";
      // }
    },
    clearError: (state) => {
      state.errorMg = null;
    },
    signOut: (state) => {
      state.activeUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem("activeUser");
    },
  },
});

export const { signUp, signIn, signOut, checkEmail, clearError } =
  authSlice.actions;
export default authSlice.reducer;
