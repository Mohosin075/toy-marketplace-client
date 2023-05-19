
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../home/home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import AllToys from "../allToys/AllToys";
import MyToys from "../myToys/MyToys";
import Blogs from "../blogs/Blogs";
import AddAToys from "../addAToys/AddAToys";
import Error404 from "../error404page/Error404";
import ShopCardDetails from "../shopCardDetails/ShopCardDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement : <Error404></Error404>,
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
        {
            path : '/allToys',
            element : <AllToys></AllToys>
        },
        {
            path : '/myToys',
            element : <MyToys></MyToys>
        },
        {
            path : '/addToys',
            element : <AddAToys></AddAToys>
        },
        {
            path : '/blogs',
            element : <Blogs></Blogs>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/shopDetails/:id',
            element : <PrivateRoute><ShopCardDetails></ShopCardDetails></PrivateRoute>,
            loader : ({params})=> fetch(`http://localhost:5000/shopDetails/${params.id}`)
        },
      ]
    },
  ]);

  export default router;