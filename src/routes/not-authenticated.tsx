import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home.tsx";

export const notAuthenticated = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);
