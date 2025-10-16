import { createBrowserRouter } from "react-router";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import PlayMovie from "./ui/PlayMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/profile", element: <Profile /> },
      { path: "/account/:id", element: <Account /> },
      { path: "/play", element: <PlayMovie /> },
    ],
  },
]);

export default router;
