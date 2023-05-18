
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../home/home/Home";
import Login from "../login/Login";
import Register from "../register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children  : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
      ]
    },
  ]);

  export default router;