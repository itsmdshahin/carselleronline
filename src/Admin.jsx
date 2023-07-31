
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";
  // import "./styles/global.scss";
  
  import Home from './components/admin/Home'
  import Users from "./components/Users/Users";
  import Navbar from "./components/Navbar/Navbar";
  import Footer from "./components/Footer/Footer"; 
  import Menu from "./components/Menu/Menu";
  import Profile from "./pages/Profile/profile";
import Transcation from "./pages/Transcation/Transcation";
import Allcar from "./pages/Allcar/Allcar";
import AddaCar from "./pages/AddaCar/AddaCar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
  
  function Admin() {
  
    const Layout = () => {
      return (
        <div className="main">
          <Navbar />
          <div className="container">
            <div className="menuContainer">
              <Menu />
            </div>
            <div className="contentContainer">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  
    const router = createBrowserRouter([
      {
        path:"/",
        element:<Layout />,
          children:[
          {
            path: "/",
            element:<Home />
          },
          {
            path: "/users",
            element: <Users />
          },
          {
            path: "/profile",
            element: <Profile />
          },
          {
            path: "/Transaction",
            element: <Transcation />
          }, 
          {
            path: "/allcar",
            element: <Allcar />
          },
          {
            path: "/addacar",
            element: <AddaCar />
          },
          {
            path: "/showallcars",
            element: <Allcar />
          },
          {
            path: "/setting",
            element: <Allcar />
          },
        ]
      },
      {
        path:"/Login",
        element:<Login />
      },
      {
        path:"/Register",
        element:<Register />
      },
 
    ]);
    return (
      <>
        <RouterProvider router={router} />
        {/* <LoginReg /> */}
  
      </>
    )
  }
  
  export default Admin
  