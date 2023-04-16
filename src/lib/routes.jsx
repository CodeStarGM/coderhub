import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Dashboard from "../components/dashboard";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Comments from "../components/comments";
import Profile from "../components/profile";
import Developers from "../components/developers";
import Homepage from "../components/homepage";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/developers";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter([
  { path: ROOT, element: <Homepage /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: <Developers />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
    ],
  },
]);
