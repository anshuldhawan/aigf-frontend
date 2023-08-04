import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddProfile } from "../Pages/AddProfile";
import { Chats } from "../Pages/Chats";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { MyCollections } from "../Pages/MyCollections";
import { Profile } from "../Pages/Profile";
import { ResetPassword } from "../Pages/ResetPassword";
import { SignUp } from "../Pages/SignUp";
export const AllRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-collections" element={<MyCollections />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/add-profile" element={<AddProfile />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/chats" element={<Chats />} />
        </Routes>
      </Router>
    </>
  );
};
