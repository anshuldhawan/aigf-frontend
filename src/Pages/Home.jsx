import React from "react";
import { ProfilesHome } from "../Components/Home/ProfilesHome";
import { Header } from "../Layout/Header";
import { Navigation } from "../Layout/Navigation";

export const Home = () => {
  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible">
          <Header
            title="Home"
            text="Welcome to AI Girlfriend Chat Dashboard !"
          />
          <ProfilesHome />
        </div>
      </div>
    </>
  );
};
