/* Routes 
An array for routing. 
It will be used for nested routing, used as children under path '/'. Structure is used as nested routing because of header routing.
*/
/* interface import */
import { Route } from "@/lib";
/* existing imports */
import Login from "@/components/login/Login";
import Landing from "@/components/landing/Landing";

const ROUTES: Route[] = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "login",
    element: <Login />,
  },
];
export default ROUTES;
