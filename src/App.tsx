import { Outlet } from "react-router";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
};

export default App;
