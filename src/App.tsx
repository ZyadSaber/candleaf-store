import { RouterProvider } from "react-router-dom";
import { router } from "./constants";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
