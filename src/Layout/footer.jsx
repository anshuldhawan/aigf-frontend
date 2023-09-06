import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="main-items-footer d-flex justify-content-between align-items-center ps-4 pe-4">
        <p className="copyright">
          {" "}
          © 2023 AI Girlfriend Chat. All rights reserved.
        </p>
        <span className="email-footer">support@aigirlfriendchat.net</span>
        <ul className="footer-terms p-0 m-0">
          <li className="list-unstyled">
            <Link to="/services">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
