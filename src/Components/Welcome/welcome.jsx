import React from "react";
import CineOne from "../../assets/welcome/cine1.png";
import CineTwo from "../../assets/welcome/cine2.png";
import CineThree from "../../assets/welcome/cine3.png";
import CineFour from "../../assets/welcome/cine4.png";
import CineFive from "../../assets/welcome/cine5.png";
import CineSix from "../../assets/welcome/cine6.png";
import CineSeven from "../../assets/welcome/cine7.png";
import CineEight from "../../assets/welcome/cine8.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import Footer from "../../Layout/footer";

const Welcome = () => {
  var settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  var settingsTwo = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    rtl: true,
  };

  ReactGA.send({
    hitType: "pageview",
    page: "/welcome",
    title: "Custom Title",
  });
  return (
    <>
      <div className="welcome-page">
        <section className="hoemtop theme-shadow card-bg-1">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-10">
                <h1 className="font-weight-semibold text-primary mb-3 homemaintext">
                  Chatting Universe
                </h1>

                <p className="text-white">
                  The place to be for the most intimate and deep conversations
                </p>

                <div className="text-center mt-3">
                  <Link
                    to="/signup"
                    className="btn my-btn btn-primary mr-1"
                    style={{ minWidth: "150px" }}
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/login"
                    className="btn my-btn btn-info"
                    style={{ minWidth: "150px" }}
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="homeitems">
          <Slider {...settings}>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineOne} />
                </div>
              </div>
            </div>
            <div className="">
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineFive} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineThree} />
                </div>
              </div>
            </div>
            <div className="">
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineFive} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineFour} />
                </div>
              </div>
            </div>

            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineTwo} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineEight} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineFour} />
                </div>
              </div>
            </div>
          </Slider>

          <Slider {...settingsTwo}>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineSix} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineSeven} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineOne} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineEight} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineTwo} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineSix} />
                </div>
              </div>
            </div>
            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineSeven} />
                </div>
              </div>
            </div>

            <div>
              <div className=" mb-30">
                <div className="proimg">
                  <img className="img-fluid w-100" src={CineThree} />
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Welcome;
