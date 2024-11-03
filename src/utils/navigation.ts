import {NavigateFunction} from "react-router-dom";
import {routeConstants} from "../constants/route.ts";


export const navigateTo = (navigate: NavigateFunction) => () => {
  navigate(routeConstants.SIGN_UP)

}
