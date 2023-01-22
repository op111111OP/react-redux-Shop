import React from "react";
import { Facebook, Instagram, Telegram } from "react-bootstrap-icons";
import Feedback from "react-bootstrap/esm/Feedback";
import "./Footer.css";

// Layout

function Footer() {
  return (
    <div className="footer container">
      <div className="icon">
        <Instagram size={35} color="blueviolet" />
        <Facebook size={35} color="blue" />
        <Telegram size={35} color="darkturquoise" />
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
