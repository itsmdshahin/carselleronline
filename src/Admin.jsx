import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
// import "./styles/global.scss";

import Home from './components/admin/Home'
import Users from "./components/Users/Users";
import Profile from "./pages/Profile/profile";
// import Profile from "./pages/Profile/profileShow";
import Profilee from "./pages/Profilee/Profilee";
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
import Research from "./components/Research/Research";
import UserProfile from "./pages/UserProfile/UserProfile";
import Brandshow from "./pages/Brandshow/brandshow";
import AllCarClient from "./pages/AllCarClient/AllCarClient";
import BrandPrevious from "./pages/BrandPrevious/brandprevious";

function Admin() {

  const isLoggedIn = localStorage.getItem('token') !== null;
  //  const adminToken  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWF0IjoxNjkyNjMyMzk2fQ.1-3duBogFh7kFHMeS4LhsNBQyPuru-6cY7m_RwdlIm8";
  //  const token = localStorage.getItem('token');


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />,
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
          element: isLoggedIn ? <Users /> : <Login />,
        },
        {
          path: "/admin/profile",
          element: isLoggedIn ? <Profile /> : <Login />,
        },
        {
          path: "/admin/Transaction",
          element: isLoggedIn ? <Transcation /> : <Login />,
        },
        {
          path: "/admin/allcar",
          element: isLoggedIn ? <AllCarClient /> : <Login />,
        },
        {
          path: "/admin/addacar",
          element: isLoggedIn ? <AddaCar /> : <Login />,
        },
        {
          path: "/admin/showallcars",
          element: isLoggedIn ? <Allcar /> : <Login />,
        },
        {
          path: "/admin/setting",
          element: isLoggedIn ? <Allcar /> : <Login />,
        },
      ]
    },
    {
      path: "/Login",
      element: isLoggedIn ? <Index /> : <Login />
    },
    {
      path: "/Register",
      element: isLoggedIn ? <Index /> : <Register />,
    },
    {
      path: "/Preview",
      element: isLoggedIn ? <Preview /> : <Login />,
    },
    {
      path: "/bidding", // most login
      element: isLoggedIn ? <Bidding /> : <Login />,
    },
    {
      path: "/endbid", // most login
      element: isLoggedIn ? <EndBid /> : <Login />,
    },
    {
      path: "/sellmycar", // most login
      element: isLoggedIn ? <SellMyCar /> : <Login />,
    },
    {
      path: "/Listing",
      element: isLoggedIn ? <ListingPage /> : <Login />,
    },
    {
      path: "/Blog",
      element: <Blog />
    },
    {
      path: "/buyer", // most login
      element: isLoggedIn ? <Buyer /> : <Login />,
    },
    {
      path: "/sold", // most login
      element: isLoggedIn ? <Sold /> : <Login />
    }, {
      path: "/Carvaluation", // most login
      element: isLoggedIn ? <Carvalucation /> : <Login />,
    },
    {
      path: "/research",
      element: <Research />
    },
    {
      path: "/profile",
      element: isLoggedIn ? <UserProfile /> : <Login />,
    },
    {
      path: "/Brandshow",
      element: <Brandshow />
    },
    {
      path: "/BrandPrevious",
      element: <BrandPrevious />
    },
    {
      path: "/Profilee",
      element: <Profilee/>
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