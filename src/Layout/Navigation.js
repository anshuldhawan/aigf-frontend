import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export const Navigation = () => {
  return (
    <>
      <div className="navigation navbar navbar-light">
        <Link className="d-none d-xl-block rounded p-1 pt-2" to="/">
          <img src={Logo} width="38" />
        </Link>
        <ul className="nav nav-minimal flex-row flex-grow-1 justify-content-between flex-xl-column justify-content-xl-center">
          <li className="nav-item">
            <Link className="nav-link position-relative p-0 active" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnsSvgjs="http://svgjs.com/svgjs"
                width="20"
                height="20"
                x="0"
                y="0"
                viewBox="0 0 460.298 460.297"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
                className="home-svg"
              >
                <g>
                  <path
                    d="M230.149 120.939 65.986 256.274c0 .191-.048.472-.144.855-.094.38-.144.656-.144.852v137.041c0 4.948 1.809 9.236 5.426 12.847 3.616 3.613 7.898 5.431 12.847 5.431h109.63V303.664h73.097v109.64h109.629c4.948 0 9.236-1.814 12.847-5.435 3.617-3.607 5.432-7.898 5.432-12.847V257.981c0-.76-.104-1.334-.288-1.707L230.149 120.939z"
                    fill="#9eb7b7"
                    data-original="#9eb7b7"
                    className=""
                  ></path>
                  <path
                    d="M457.122 225.438 394.6 173.476V56.989c0-2.663-.856-4.853-2.574-6.567-1.704-1.712-3.894-2.568-6.563-2.568h-54.816c-2.666 0-4.855.856-6.57 2.568-1.711 1.714-2.566 3.905-2.566 6.567v55.673l-69.662-58.245c-6.084-4.949-13.318-7.423-21.694-7.423-8.375 0-15.608 2.474-21.698 7.423L3.172 225.438c-1.903 1.52-2.946 3.566-3.14 6.136-.193 2.568.472 4.811 1.997 6.713l17.701 21.128c1.525 1.712 3.521 2.759 5.996 3.142 2.285.192 4.57-.476 6.855-1.998L230.149 95.817l197.57 164.741c1.526 1.328 3.521 1.991 5.996 1.991h.858c2.471-.376 4.463-1.43 5.996-3.138l17.703-21.125c1.522-1.906 2.189-4.145 1.991-6.716-.195-2.563-1.242-4.609-3.141-6.132z"
                    fill="#9eb7b7"
                    data-original="#9eb7b7"
                    className=""
                  ></path>
                </g>
              </svg>
              <div className="tooltip-text position-absolute">
                <p className="m-0">Home</p>
              </div>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link position-relative p-0" to="#">
              <i className="fas fa-list"></i>
              <div className="tooltip-text position-absolute">
                <p className="m-0">My Collection</p>
              </div>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link position-relative p-0" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 512 512"
                fill="none"
              >
                <g filter="url(#filter0_d_27_198)">
                  <path
                    d="M419.333 447.667C439.952 447.667 456.667 430.952 456.667 410.333C456.667 389.715 439.952 373 419.333 373C398.715 373 382 389.715 382 410.333C382 430.952 398.715 447.667 419.333 447.667Z"
                    fill="#9eb7b7"
                  />
                  <path
                    d="M166.667 447.72C187.285 447.72 204 431.005 204 410.387C204 389.768 187.285 373.053 166.667 373.053C146.048 373.053 129.333 389.768 129.333 410.387C129.333 431.005 146.048 447.72 166.667 447.72Z"
                    fill="#9eb7b7"
                  />
                  <path
                    d="M405.333 353.28H187.947L130.987 67.6267C129.036 57.8049 123.693 48.9822 115.892 42.703C108.092 36.4238 98.3317 33.0881 88.32 33.28H64C58.342 33.28 52.9158 35.5276 48.915 39.5284C44.9142 43.5292 42.6666 48.9554 42.6666 54.6133C42.6666 60.2713 44.9142 65.6975 48.915 69.6983C52.9158 73.699 58.342 75.9467 64 75.9467H89.1733L139.307 327.68L146.347 362.667C148.297 372.488 153.641 381.311 161.441 387.59C169.241 393.87 179.002 397.205 189.013 397.013H405.333C410.991 397.013 416.417 394.766 420.418 390.765C424.419 386.764 426.667 381.338 426.667 375.68C426.667 370.022 424.419 364.596 420.418 360.595C416.417 356.594 410.991 354.347 405.333 354.347V353.28Z"
                    fill="#9eb7b7"
                  />
                  <path
                    d="M476.8 112.64C474.273 109.421 471.027 106.837 467.323 105.096C463.618 103.355 459.558 102.505 455.467 102.613H106.667C104.32 102.613 144.64 326.613 144.64 326.613H400.64C411.662 326.811 422.41 323.175 431.048 316.327C439.687 309.479 445.679 299.843 448 289.067L482.133 135.04C482.99 131.146 482.955 127.108 482.032 123.229C481.108 119.35 479.32 115.73 476.8 112.64ZM341.333 229.333H314.667V256C314.667 260.243 312.981 264.313 309.98 267.314C306.98 270.314 302.91 272 298.667 272C294.423 272 290.354 270.314 287.353 267.314C284.352 264.313 282.667 260.243 282.667 256V229.333H256C251.757 229.333 247.687 227.648 244.686 224.647C241.686 221.646 240 217.577 240 213.333C240 209.09 241.686 205.02 244.686 202.02C247.687 199.019 251.757 197.333 256 197.333H282.667V170.667C282.667 166.423 284.352 162.354 287.353 159.353C290.354 156.352 294.423 154.667 298.667 154.667C302.91 154.667 306.98 156.352 309.98 159.353C312.981 162.354 314.667 166.423 314.667 170.667V197.333H341.333C345.577 197.333 349.647 199.019 352.647 202.02C355.648 205.02 357.333 209.09 357.333 213.333C357.333 217.577 355.648 221.646 352.647 224.647C349.647 227.648 345.577 229.333 341.333 229.333Z"
                    fill="#9eb7b7"
                  />
                  <path d="M491 102.5H453.5L480 144L491 102.5Z" fill="#9eb7b7" />
                  <path
                    d="M400 353.254L428 353V397H400V353.254Z"
                    fill="#9eb7b7"
                  />
                  <path d="M43 33L65 33.2578V76H43V33Z" fill="#9eb7b7" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_27_198"
                    x="-4"
                    y="0"
                    width="520"
                    height="520"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_27_198"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_27_198"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="tooltip-text position-absolute">
                <p className="m-0">Buy Credits</p>
              </div>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link position-relative p-0" to="#">
              <i className="fas fa-coins"></i>
              <div className="tooltip-text position-absolute">
                <p className="m-0">Current Credits</p>
              </div>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link position-relative p-0" to="/login">
              <i className="far fa-user-circle"></i>
              <div className="tooltip-text position-absolute">
                <p className="m-0">My Account</p>
              </div>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link position-relative p-0" to="/admin-profiles">
              <i className="fa-solid fa-house-user"></i>
              <div className="tooltip-text position-absolute">
                <p className="m-0">Admin</p>
              </div>
            </Link>
          </li>


        </ul>
      </div>
    </>
  );
};
