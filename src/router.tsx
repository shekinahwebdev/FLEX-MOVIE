import { createBrowserRouter } from "react-router";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

export default router;
