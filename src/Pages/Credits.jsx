import React from "react";
import { CurrentCredits } from "../Components/CurrentCredits/CurrentCredits";
import { Header } from "../Layout/Header";
import { Navigation } from "../Layout/Navigation";

export const Credits = () => {
  return (
    <>
      <div className="main-layout d-flex flex-row h-100">
        <Navigation />
        <div className="profiles-home main-visible">
          <Header
            title="Current Credits"
            text="Check your total Credits & you can buy Credit if needed"
          />
          <CurrentCredits />
        </div>
      </div>
    </>
  );
};
