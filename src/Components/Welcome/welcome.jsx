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

const Welcome = () => {
  var settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    dots: false,
  };
  var settingsTwo = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    dots: false,
    rtl: true,
  };
  return (
    <div className="welcome-page">
      <section className="hoemtop theme-shadow card-bg-1">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-10">
              <h1 className="font-weight-semibold text-primary mb-3 homemaintext">
                Think Different, Think Services
              </h1>

              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
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
                <img src={CineOne} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineTwo} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineThree} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineFour} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineFive} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineSix} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineSeven} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineEight} />
              </div>
            </div>
          </div>
        </Slider>
        <Slider {...settingsTwo}>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineOne} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineTwo} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineThree} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineFour} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineFive} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineSix} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineSeven} />
              </div>
            </div>
          </div>
          <div>
            <div className=" mb-30">
              <div className="proimg">
                <img src={CineEight} />
              </div>
            </div>
          </div>
        </Slider>
        {/* <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="position-relative mb-30">
              <div className="proimg">
                <img src={CineOne} />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="position-relative mb-30">
              <div className="proimg">
                <img src={CineOne} />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Welcome;
