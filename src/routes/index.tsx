import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../components/Users/Users";
import Edit from "../components/Edit/Edit";

export const ROUTES = {
  HOME: "/",
  USERS: "/users",
  EDIT: "/edit",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
  },
  {
    path: ROUTES.USERS,
    element: <Users />,
  },
  {
    path: ROUTES.EDIT,
    element: <Edit />,
  },
]);
