import React from "react";
import { Instagram } from "react-bootstrap-icons";
import "./Footer.css";

// Layout

function Footer() {
  return (
    <div className="footer container">
      <div className="icon">
        <Instagram size={50} color="blueviolet" />
      </div>

      <div className="number">
        <p>+380 991 3049</p>
        <p>+380 931 4069</p>
        <p>+380 935 3789</p>
      </div>
    </div>
  );
}

export default Footer;
