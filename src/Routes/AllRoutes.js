import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
<<<<<<< HEAD
import EditProfile from "../Pages/EditProfile";
import { AdminLogin } from "../Pages/AdminLogin";

=======
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
export const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-collections" element={<MyCollections />} />
          <Route exact path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/admin/add-profile" element={<AddProfile />} />
          <Route exact path="/edit-profile/:uid" element={<EditProfile />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/chats" element={<Chats />} />
          <Route exact path="/admin/profiles" element={<AdminProfiles />} />
=======
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/add-profile" element={<AddProfile />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/chats" element={<Chats />} />
          <Route exact path="/admin-profiles" element={<AdminProfiles />} />
>>>>>>> d860a4c564b29050a7d347a0f6bbad6a96b2b9d2
          <Route exact path="/buy-credits" element={<BuyCredits />} />
          <Route exact path="/credits" element={<Credits />} />
          <Route exact path="/my-account" element={<MyAccount />} />
        </Routes>
      </Router>
    </>
  );
};
