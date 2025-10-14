import { createBrowserRouter } from "react-router";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Account from "./pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/profile", element: <Profile /> },
      { path: "/account", element: <Account /> },
    ],
  },
]);

export default router;
