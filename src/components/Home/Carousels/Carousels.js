import { List } from "react-bootstrap-icons";
import React from "react";
import "./Carousels.css";
import { useContext, useState, useEffect } from "react";
import Context from "../../../common/context";
import { Link } from "react-router-dom";
import Computer from "../../public/iconc/computer.png";
import Diamond from "../../public/iconc/diamond.png";
import Fut from "../../public/iconc/fut.png";
import Womans from "../../public/iconc/womans.png";

// Home
function Carousels() {
  const { categories, know, lenCategories, leng, colorMenu } =
    useContext(Context);
  const [switchs, setSwitchs] = useState(lenCategories);
  useEffect(() => {
    know ? setSwitchs(lenCategories) : setSwitchs(categories);
  }, [know]);

  return (
    <div className="carousels_cont">
      <div className="carousels_menu">
        <ul className="ul_menu">
          <li>
            <div className="title_box">
              <List color={colorMenu ? "black" : "white"} size={21} />
              <div className={colorMenu ? " link_menuC" : "link_menuT"}>
                {leng.catalog}
              </div>
            </div>
          </li>
          {switchs.map((item, index) => (
            <li key={index} className="li_menu">
              <Link
                className={colorMenu ? "link link_menuC" : "link link_menuT"}
                to={`/${index}m`}
              >
                <div
                  className={
                    colorMenu ? "menu_box menu_boxC" : "menu_box menu_boxT"
                  }
                >
                  {index + 1}. {item}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <img src={Computer} />
        <img src={Diamond} />
        <img src={Fut} />
        <img src={Womans} />
      </div>
      <div className="carousels"></div>
    </div>
  );
}

export default Carousels;
