import React, { useContext } from "react";
import {
  Facebook,
  Instagram,
  Telegram,
  Telephone,
} from "react-bootstrap-icons";
import Feedback from "react-bootstrap/esm/Feedback";
import Context from "../../../common/context";
import "./Footer.css";

// Layout

function Footer() {
  const { leng } = useContext(Context);
  return (
    <div className="footer container">
      <div className="icon">
        <Instagram size={35} color="blueviolet" />
        <Facebook size={35} color="blue" />
        <Telegram size={35} color="darkturquoise" />
      </div>
      <div className="addres">
        <div>support@kasta.ua</div>
        <div>{leng.address}</div>
        <div>{leng.reserved}</div>
      </div>
      <div className="number">
        <div>
          <Telephone color="rgb(255, 252, 252)" />
          +380 991 3049
        </div>
        <div>
          <Telephone color="rgb(255, 252, 252)" />
          +380 931 4069
        </div>
        <div>
          <Telephone color="rgb(255, 252, 252)" />
          +380 935 3789
        </div>
      </div>
    </div>
  );
}

export default Footer;
