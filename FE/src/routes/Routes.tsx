/* Routes 
An array for routing. 
It will be used for nested routing, used as children under path '/'. Structure is used as nested routing because of header routing.
*/
/* interface import */
import { Route } from "@/lib";
/* existing imports */
import Login from "@/pages/login/Login";
import Landing from "@/pages/landing/Landing";
import SignUp from "@/pages/signup/Signup";
import MyStroage from "@/pages/my-storage/MyStorage";
import GlobalStorage from "@/pages/global-storage/GlobalStorage";

const ROUTES: Route[] = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  {
    path: "my-storage",
    element: <MyStroage />,
  },
  {
    path: "global-storage",
    element: <GlobalStorage />,
  },
];
export default ROUTES;
