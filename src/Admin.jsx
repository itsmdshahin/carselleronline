
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
import Research from "./components/Research/Research";
import UserProfile from "./pages/UserProfile/UserProfile";


function Admin() {
  
  const isLoggedIn = localStorage.getItem('token') !== null;

  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index  />,
    },
    {
      path: "/admin",
      element: isLoggedIn ? <Layout /> : <Login />,
      children: [
        {
          path: "/admin",
          element: isLoggedIn ? <Home /> : <Login />,
        },
        {
          path: "/admin/users",
          element: !isLoggedIn ? <Login /> : <Users />
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
      element: isLoggedIn ? <Index /> : <Login />
    },
    {
      path: "/Register",
      element: isLoggedIn ? <Index /> : <Register />
    },
    {
      path: "/Preview", 
      element: !isLoggedIn ? <Login /> :  <Preview />
    },
    {
      path: "/bidding", // most login
      element: !isLoggedIn ? <Login /> : <Bidding />
    },
    {
      path: "/endbid", // most login
      element: !isLoggedIn ? <Login /> : <EndBid />
    },
    {
      path: "/sellmycar", // most login
      element: !isLoggedIn ? <Login /> : <SellMyCar />
    },
    {
      path: "/Listing", 
      element: !isLoggedIn ? <Login /> : <ListingPage />
    },
    {
      path: "/Blog",
      element: <Blog />
    },
    {
      path: "/buyer", // most login
      element: !isLoggedIn ? <Login /> : <Buyer />
    },
    {
      path: "/sold", // most login
      element: <Sold />
    }, {
      path: "/Carvaluation", // most login
      element: !isLoggedIn ? <Login /> : <Carvalucation />
    },
    {
      path: "/research",
      element: <Research />
    },
    {
      path:"/profile",
      element: !isLoggedIn ? <Login /> : <UserProfile />
    }

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
