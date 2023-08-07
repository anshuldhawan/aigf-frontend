import React from "react";
import { Navigation } from "../Layout/Navigation";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrflImgUsr from "../assets/images/new-user-icon.png";
export const AdminProfiles = () => {
    return (
        <>
            <div className="main-layout d-flex flex-row h-100">
                <Navigation />
                <div className="profiles-home listing-new-users main-visible position-relative">
                    <div className="icon-profile-user position-absolute">
                        <Link to="/add-profile">
                            <Button>Add New Profile</Button>
                        </Link>
                    </div>
                    <Container className="list-container-user h-100">
                        <div className="table-listing-user d-flex flex-column justify-content-center align-items-center h-100">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Profile Image</th>
                                        <th>Name</th>
                                        <th>Profession</th>
                                        <th>Age</th>
                                        <th>Country</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="img-user">
                                            <img src={PrflImgUsr} />
                                        </td>
                                        <td>John</td>
                                        <td>Developer</td>
                                        <td>26</td>
                                        <td>Canada</td>
                                        <td>
                                            <div className="icon-edit-table">
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 488.85 488.85"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className=""
                                                    >
                                                        <g>
                                                            <path
                                                                d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 408.483 408.483"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M87.748 388.784c.461 11.01 9.521 19.699 20.539 19.699h191.911c11.018 0 20.078-8.689 20.539-19.699l13.705-289.316H74.043l13.705 289.316zm159.907-217.455a8.35 8.35 0 0 1 8.35-8.349h13.355a8.351 8.351 0 0 1 8.35 8.349v165.293a8.35 8.35 0 0 1-8.35 8.349h-13.355a8.35 8.35 0 0 1-8.35-8.349V171.329zm-58.439 0a8.35 8.35 0 0 1 8.349-8.349h13.355a8.35 8.35 0 0 1 8.349 8.349v165.293a8.348 8.348 0 0 1-8.349 8.349h-13.355a8.348 8.348 0 0 1-8.349-8.349V171.329zm-58.441 0a8.35 8.35 0 0 1 8.349-8.349h13.356a8.35 8.35 0 0 1 8.349 8.349v165.293a8.349 8.349 0 0 1-8.349 8.349h-13.356a8.348 8.348 0 0 1-8.349-8.349V171.329zM343.567 21.043h-88.535V4.305A4.305 4.305 0 0 0 250.727 0h-92.971a4.305 4.305 0 0 0-4.304 4.305v16.737H64.916c-7.125 0-12.9 5.776-12.9 12.901V74.47h304.451V33.944c0-7.125-5.775-12.901-12.9-12.901z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 492.493 492"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="img-user">
                                            <img src={PrflImgUsr} />
                                        </td>
                                        <td>Mary</td>
                                        <td>Developer</td>
                                        <td>26</td>
                                        <td>Canada</td>
                                        <td>
                                            <div className="icon-edit-table">
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 488.85 488.85"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className=""
                                                    >
                                                        <g>
                                                            <path
                                                                d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 408.483 408.483"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M87.748 388.784c.461 11.01 9.521 19.699 20.539 19.699h191.911c11.018 0 20.078-8.689 20.539-19.699l13.705-289.316H74.043l13.705 289.316zm159.907-217.455a8.35 8.35 0 0 1 8.35-8.349h13.355a8.351 8.351 0 0 1 8.35 8.349v165.293a8.35 8.35 0 0 1-8.35 8.349h-13.355a8.35 8.35 0 0 1-8.35-8.349V171.329zm-58.439 0a8.35 8.35 0 0 1 8.349-8.349h13.355a8.35 8.35 0 0 1 8.349 8.349v165.293a8.348 8.348 0 0 1-8.349 8.349h-13.355a8.348 8.348 0 0 1-8.349-8.349V171.329zm-58.441 0a8.35 8.35 0 0 1 8.349-8.349h13.356a8.35 8.35 0 0 1 8.349 8.349v165.293a8.349 8.349 0 0 1-8.349 8.349h-13.356a8.348 8.348 0 0 1-8.349-8.349V171.329zM343.567 21.043h-88.535V4.305A4.305 4.305 0 0 0 250.727 0h-92.971a4.305 4.305 0 0 0-4.304 4.305v16.737H64.916c-7.125 0-12.9 5.776-12.9 12.901V74.47h304.451V33.944c0-7.125-5.775-12.901-12.9-12.901z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 492.493 492"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="img-user">
                                            <img src={PrflImgUsr} />
                                        </td>
                                        <td>July</td>
                                        <td>Developer</td>
                                        <td>26</td>
                                        <td>Canada</td>
                                        <td>
                                            <div className="icon-edit-table">
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 488.85 488.85"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className=""
                                                    >
                                                        <g>
                                                            <path
                                                                d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 408.483 408.483"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M87.748 388.784c.461 11.01 9.521 19.699 20.539 19.699h191.911c11.018 0 20.078-8.689 20.539-19.699l13.705-289.316H74.043l13.705 289.316zm159.907-217.455a8.35 8.35 0 0 1 8.35-8.349h13.355a8.351 8.351 0 0 1 8.35 8.349v165.293a8.35 8.35 0 0 1-8.35 8.349h-13.355a8.35 8.35 0 0 1-8.35-8.349V171.329zm-58.439 0a8.35 8.35 0 0 1 8.349-8.349h13.355a8.35 8.35 0 0 1 8.349 8.349v165.293a8.348 8.348 0 0 1-8.349 8.349h-13.355a8.348 8.348 0 0 1-8.349-8.349V171.329zm-58.441 0a8.35 8.35 0 0 1 8.349-8.349h13.356a8.35 8.35 0 0 1 8.349 8.349v165.293a8.349 8.349 0 0 1-8.349 8.349h-13.356a8.348 8.348 0 0 1-8.349-8.349V171.329zM343.567 21.043h-88.535V4.305A4.305 4.305 0 0 0 250.727 0h-92.971a4.305 4.305 0 0 0-4.304 4.305v16.737H64.916c-7.125 0-12.9 5.776-12.9 12.901V74.47h304.451V33.944c0-7.125-5.775-12.901-12.9-12.901z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 492.493 492"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="img-user">
                                            <img src={PrflImgUsr} />
                                        </td>
                                        <td>July</td>
                                        <td>Developer</td>
                                        <td>26</td>
                                        <td>Canada</td>
                                        <td>
                                            <div className="icon-edit-table">
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 488.85 488.85"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className=""
                                                    >
                                                        <g>
                                                            <path
                                                                d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 408.483 408.483"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M87.748 388.784c.461 11.01 9.521 19.699 20.539 19.699h191.911c11.018 0 20.078-8.689 20.539-19.699l13.705-289.316H74.043l13.705 289.316zm159.907-217.455a8.35 8.35 0 0 1 8.35-8.349h13.355a8.351 8.351 0 0 1 8.35 8.349v165.293a8.35 8.35 0 0 1-8.35 8.349h-13.355a8.35 8.35 0 0 1-8.35-8.349V171.329zm-58.439 0a8.35 8.35 0 0 1 8.349-8.349h13.355a8.35 8.35 0 0 1 8.349 8.349v165.293a8.348 8.348 0 0 1-8.349 8.349h-13.355a8.348 8.348 0 0 1-8.349-8.349V171.329zm-58.441 0a8.35 8.35 0 0 1 8.349-8.349h13.356a8.35 8.35 0 0 1 8.349 8.349v165.293a8.349 8.349 0 0 1-8.349 8.349h-13.356a8.348 8.348 0 0 1-8.349-8.349V171.329zM343.567 21.043h-88.535V4.305A4.305 4.305 0 0 0 250.727 0h-92.971a4.305 4.305 0 0 0-4.304 4.305v16.737H64.916c-7.125 0-12.9 5.776-12.9 12.901V74.47h304.451V33.944c0-7.125-5.775-12.901-12.9-12.901z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 492.493 492"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="img-user">
                                            <img src={PrflImgUsr} />
                                        </td>
                                        <td>July</td>
                                        <td>Developer</td>
                                        <td>26</td>
                                        <td>Canada</td>
                                        <td>
                                            <div className="icon-edit-table">
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 488.85 488.85"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className=""
                                                    >
                                                        <g>
                                                            <path
                                                                d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 408.483 408.483"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M87.748 388.784c.461 11.01 9.521 19.699 20.539 19.699h191.911c11.018 0 20.078-8.689 20.539-19.699l13.705-289.316H74.043l13.705 289.316zm159.907-217.455a8.35 8.35 0 0 1 8.35-8.349h13.355a8.351 8.351 0 0 1 8.35 8.349v165.293a8.35 8.35 0 0 1-8.35 8.349h-13.355a8.35 8.35 0 0 1-8.35-8.349V171.329zm-58.439 0a8.35 8.35 0 0 1 8.349-8.349h13.355a8.35 8.35 0 0 1 8.349 8.349v165.293a8.348 8.348 0 0 1-8.349 8.349h-13.355a8.348 8.348 0 0 1-8.349-8.349V171.329zm-58.441 0a8.35 8.35 0 0 1 8.349-8.349h13.356a8.35 8.35 0 0 1 8.349 8.349v165.293a8.349 8.349 0 0 1-8.349 8.349h-13.356a8.348 8.348 0 0 1-8.349-8.349V171.329zM343.567 21.043h-88.535V4.305A4.305 4.305 0 0 0 250.727 0h-92.971a4.305 4.305 0 0 0-4.304 4.305v16.737H64.916c-7.125 0-12.9 5.776-12.9 12.901V74.47h304.451V33.944c0-7.125-5.775-12.901-12.9-12.901z"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <Link>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        xmlnsSvgjs="http://svgjs.com/svgjs"
                                                        width="15"
                                                        height="15"
                                                        x="0"
                                                        y="0"
                                                        viewBox="0 0 492.493 492"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="ms-2"
                                                    >
                                                        <g>
                                                            <path
                                                                d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                                                fill="#000000"
                                                                data-original="#000000"
                                                                className=""
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};
