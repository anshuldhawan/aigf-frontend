import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { authRoutes, userRoutes, adminRoutes } from "./routes";
// import { AddProfile } from "../Pages/AddProfile";
// import { AdminProfiles } from "../Pages/AdminProfiles";
// import { BuyCredits } from "../Pages/BuyCredits";
// import { Chats } from "../Pages/Chats";
// import { Credits } from "../Pages/Credits";
// import { Home } from "../Pages/Home";
// import { Login } from "../Pages/Login";
// import { MyAccount } from "../Pages/MyAccount";
// import { MyCollections } from "../Pages/MyCollections";
// import { Profile } from "../Pages/Profile";
// import { ResetPassword } from "../Pages/ResetPassword";
// import { SignUp } from "../Pages/SignUp";
// import EditProfile from "../Pages/EditProfile";
// import { AdminLogin } from "../Pages/AdminLogin";

export const AllRoutes = () => {
  const adminToken = localStorage.getItem("adminToken");
  const userToken = localStorage.getItem("userToken");

  return (
    <>
      <Router>
        <Routes>
          {adminToken !== null && userToken == null ? (
            <>
              <Route
                path="*"
                element={<Navigate replace to="/admin/profiles" />}
              />
            </>
          ) : (
            <>
              {authRoutes.map((data, index) => (
                <Route
                  onUpdate={() => window.scrollTo(0, 0)}
                  exact={true}
                  path={data.path}
                  element={data.component}
                  key={index}
                />
              ))}
            </>
          )}

          {userToken !== null && adminToken == null ? (
            <>
              <Route path="*" element={<Navigate replace to="/" />} />
            </>
          ) : (
            <>
              {authRoutes.map((data, index) => (
                <Route
                  onUpdate={() => window.scrollTo(0, 0)}
                  exact={true}
                  path={data.path}
                  element={data.component}
                  key={index}
                />
              ))}
            </>
          )}

          {userToken !== null &&
            adminToken == null &&
            userRoutes.map((data, index) => (
              <Route path={data.path} element={data.component} key={index} />
            ))}

          {adminToken !== null &&
            userToken == null &&
            adminRoutes.map((data, index) => (
              <Route path={data.path} element={data.component} key={index} />
            ))}

          {adminToken == null && userToken == null && (
            <Route path="*" element={<Navigate replace to="/login" />} />
          )}
        </Routes>

        {/* <Routes>  
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/admin/profiles" element={<AdminProfiles />} />
          <Route exact path="/admin/add-profile" element={<AddProfile />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/my-collections" element={<MyCollections />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/edit-profile/:uid" element={<EditProfile />} />
          <Route exact path="/profile/:botId" element={<Profile />} />
          <Route exact path="/chats/:botId" element={<Chats />} />
          <Route exact path="/buy-credits" element={<BuyCredits />} />
          <Route exact path="/credits" element={<Credits />} />
          <Route exact path="/my-account" element={<MyAccount />} />
        </Routes> */}
      </Router>
    </>
  );
};
