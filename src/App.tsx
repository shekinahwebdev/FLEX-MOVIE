import { Outlet } from "react-router";
import Header from "./layout/Header";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
