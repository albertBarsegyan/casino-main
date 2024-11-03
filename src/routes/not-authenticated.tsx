import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home.tsx";
import {SignUp} from "../pages/sign-up.tsx";
import {routeConstants} from "../constants/route.ts";

export const notAuthenticated = createBrowserRouter([
  {
    path: routeConstants.HOME,
    element: <Home/>,
  },
  {
    path: routeConstants.SIGN_UP,
    element: <SignUp/>,
  },
]);
