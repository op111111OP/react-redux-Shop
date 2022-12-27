import { List } from "react-bootstrap-icons";
import React from "react";
import "./Carousels.css";
import { useContext, useState, useEffect } from "react";
import Context from "../../../common/context";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Computer from "../../public/iconc/computer.png";
import Diamond from "../../public/iconc/diamond.png";
import Fut from "../../public/iconc/fut.png";
import Womans from "../../public/iconc/womans.png";

// Home
function Carousels() {
  const { categories, know, lenCategories, leng, colorMenu } =
    useContext(Context);
  const [switchs, setSwitchs] = useState(lenCategories);
  const [iconMenu, setIconMenu] = useState("");
  const [indexMenu, setIndexMenu] = useState("");
  console.log(indexMenu);
  useEffect(() => {
    know ? setSwitchs(lenCategories) : setSwitchs(categories);
  }, [know]);
  function setIndexMen(i) {
    console.log(i);
  }
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
                  {setIndexMen(`${index}m`)}
                  <img src={iconMenu} /> {item}
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
      <div className="carousels">
        <Carousel>
          <Carousel.Item className="carItem">
            <div>
              <img
                className="d-block"
                src="https://www.vitacenter.com.ua/wp-content/uploads/2022/05/akcia.png"
                alt="First slide"
              />
            </div>
            <Carousel.Caption className="carousel_text">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carItem">
            <img
              className="d-block"
              src="https://www.vitacenter.com.ua/wp-content/uploads/2022/05/akcia.png"
              alt="Second slide"
            />

            <Carousel.Caption className="carousel_text">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carItem">
            <img
              className="d-block h-1005"
              src="https://www.vitacenter.com.ua/wp-content/uploads/2022/05/akcia.png"
              alt="Third slide"
            />

            <Carousel.Caption className="carousel_text">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Carousels;
