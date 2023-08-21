import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AddProfile } from "../Pages/AddProfile";
import { AdminProfiles } from "../Pages/AdminProfiles";
import { BuyCredits } from "../Pages/BuyCredits";
import { Chats } from "../Pages/Chats";
import { Credits } from "../Pages/Credits";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { MyAccount } from "../Pages/MyAccount";
import { MyCollections } from "../Pages/MyCollections";
import { Profile } from "../Pages/Profile";
import { ResetPassword } from "../Pages/ResetPassword";
import { SignUp } from "../Pages/SignUp";
import EditProfile from "../Pages/EditProfile";
import { AdminLogin } from "../Pages/AdminLogin";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import Welcome from "../Components/Welcome/welcome";

export const AllRoutes = () => {
  const adminToken = localStorage.getItem("adminToken");
  const userToken = localStorage.getItem("userToken");
  const { role } = useSelector((s) => s.Admin);
  console.log("token ====>", userToken, adminToken);

  const publicRoutes = [
    { path: "/login", component: <Login /> },
    { path: "/admin/login", component: <AdminLogin /> },
    { path: "/reset-password", component: <ResetPassword /> },
    { path: "/signup", component: <SignUp /> },
    { path: "/welcome", component: <Welcome /> },
  ];

  const userRoutes = [
    // { path: "/welcome", component: <Welcome /> },
    { path: "/home", component: <Home /> },
    { path: "/my-collections", component: <MyCollections /> },
    { path: "/my-account", component: <MyAccount /> },
    { path: "/credits", component: <Credits /> },
    { path: "/buy-credits", component: <BuyCredits /> },
    { path: "/profile/:botId", component: <Profile /> },
    { path: "/chats/:botId", component: <Chats /> },
  ];

  const adminRoutes = [
    { path: "/admin/profiles", component: <AdminProfiles /> },
    { path: "/admin/add-profile", component: <AddProfile /> },
    { path: "/edit-profile/:uid", component: <EditProfile /> },
  ];

  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((item, index) => (
            <Route path={item.path} element={item.component} key={index} />
          ))}

          {/* {role === "user" && */}
          {userToken &&
            userRoutes.map((item, index) => (
              <Route
                path={item.path}
                element={<PrivateRoute>{item.component}</PrivateRoute>}
                key={index}
              />
            ))}
          {/* ))} */}
          {userToken ? (
            <Route path="/" element={<Navigate replace to="/home" />} />
          ) : (
            <Route path="/" element={<Navigate replace to="/welcome" />} />
          )}

          {adminToken && (
            <Route
              path="/"
              element={<Navigate replace to="/admin/profiles" />}
            />
          )}

          {role === "admin" &&
            adminToken &&
            adminRoutes.map((item, index) => (
              <Route
                path={item.path}
                element={<PrivateRoute>{item.component}</PrivateRoute>}
                key={index}
              />
            ))}

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
};
