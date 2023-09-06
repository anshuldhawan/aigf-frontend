import React from "react";
import { AllCollection } from "../Components/MyCollections/AllCollection";
import { Header } from "../Layout/Header";
import { Navigation } from "../Layout/Navigation";
import Footer from "../Layout/footer";

export const MyCollections = () => {
  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible">
          <Header
            title="My Collection"
            // text="View and Purchase our all Profiles"
          />
          <AllCollection />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};
