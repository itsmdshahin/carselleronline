
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
// import "./styles/global.scss";

import Home from './components/admin/Home'
import Users from "./components/Users/Users";
import Profile from "./pages/Profile/profile";
import Transcation from "./pages/Transcation/Transcation";
import Allcar from "./pages/Allcar/Allcar";
import AddaCar from "./pages/AddaCar/AddaCar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Layout from "./components/Layout/Layout";
import Index from "./pages/Home/Index";
import Preview from "./pages/PreviewPage/Preview";
import Bidding from "./pages/Bidding/Bidding";
import EndBid from "./pages/EndBid/EndBid";
import SellMyCar from "./pages/SellMyCar/SellMyCar";
import ListingPage from "./pages/listingPage/listingPage";
import Blog from "./pages/Blog/Blog";
import Buyer from "./pages/buyerPage/buyer";
import Sold from "./pages/Sold/Sold";
import Carvalucation from "./pages/Carvalucation/Carvalucation";
import Nav from "./components/headerPage/navbar/nav";
import { useState } from "react";


function Admin() {
 
  
 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index  />,
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Home />
        },
        {
          path: "/admin/users",
          element: <Users />
        },
        {
          path: "/admin/profile",
          element: <Profile />
        },
        {
          path: "/admin/Transaction",
          element: <Transcation />
        },
        {
          path: "/admin/allcar",
          element: <Allcar />
        },
        {
          path: "/admin/addacar",
          element: <AddaCar />
        },
        {
          path: "/admin/showallcars",
          element: <Allcar />
        },
        {
          path: "/admin/setting",
          element: <Allcar />
        },
      ]
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Register",
      element: <Register />
    },
    {
      path: "/home", 
      element: <Home />
    },
    {
      path: "/Preview", 
      element: <Preview />
    },
    {
      path: "/bidding", // most login
      element: <Bidding />
    },
    {
      path: "/endbid", // most login
      element: <EndBid />
    },
    {
      path: "/sellmycar", // most login
      element: <SellMyCar />
    },
    {
      path: "/Listing", 
      element: <ListingPage />
    },
    {
      path: "/Blog",
      element: <Blog />
    },
    {
      path: "/buyer", // most login
      element: <Buyer />
    },
    {
      path: "/sold", // most login
      element: <Sold />
    }, {
      path: "/Carvaluation", // most login
      element: <Carvalucation />
    },
    {
      path:"/profile",
      element:<Profile />
    }
    // {
    //   path:"/Buyer",
    //   element:<Buyer />
    // }

  ]);
  return (
    <>
      

      <RouterProvider 
        router={router}  
      />
      {/* <LoginReg /> */}

    </>
  )
}

export default Admin
