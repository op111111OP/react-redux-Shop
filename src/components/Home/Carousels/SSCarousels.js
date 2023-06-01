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
import Fon from "../../public/img/fon.png";

// Home
function SSCarousels() {
  const {
    carousels1,
    carousels2,
    carousels3,
    categories,
    know,
    lenCategories,
    leng,
    colorMenu,
  } = useContext(Context);
  const [switchs, setSwitchs] = useState(lenCategories);

  const areuMenu = [Computer, Diamond, Fut, Womans];

  useEffect(() => {
    know ? setSwitchs(lenCategories) : setSwitchs(categories);
  }, [know]);

  return (
    <div className="carousels_cont">
      <div className="carousels_menu">
        <ul className="ul_menu">
          <div className="title_box">
            <List color={colorMenu ? "black" : "white"} size={21} />
            <div className={colorMenu ? " link_menuC" : "link_menuT"}>
              {leng.catalog}
            </div>
          </div>
          {switchs.map((item, index) => (
            <div key={index} className="li_menu">
              <Link
                className={colorMenu ? "link link_menuC" : "link link_menuT"}
                to={`/${index}m`}
              >
                <div
                  className={
                    colorMenu ? "menu_box menu_boxC" : "menu_box menu_boxT"
                  }
                >
                  <img src={areuMenu[index]} className="iconMenu" /> {item}
                </div>
              </Link>
            </div>
          ))}
        </ul>
      </div>
      <div className="carousels">
        <Carousel>
          <Carousel.Item
            className="carItem"
            style={{ backgroundImage: `url(${Fon})` }}
          >
            <Link className="link" to={`/post/${carousels1.id}`}>
              <img
                className="d-block akcia"
                src={carousels1.image}
                alt="First slide"
              />
            </Link>

            <Carousel.Caption className="carousel_text">
              <Link className="link" to={`/post/${carousels1.id}`}>
                <h4>{leng.h4}</h4>
                <h3>
                         S H A R E -50%        S H A R E -50%        S H A R E
                  -50%
                </h3>
                <h5>-50%</h5>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="carItem"
            style={{ backgroundImage: `url(${Fon})` }}
          >
            <Link className="link" to={`/post/${carousels2.id}`}>
              <img
                className="d-block akcia"
                src={carousels2.image}
                alt="Second slide"
              />
            </Link>

            <Carousel.Caption className="carousel_text">
              <Link className="link" to={`/post/${carousels2.id}`}>
                <h4>{leng.h4}</h4>
                <h3>
                         S H A R E -40%        S H A R E -40%        S H A R E
                  -40%
                </h3>
                <h5>-40%</h5>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="carItem"
            style={{ backgroundImage: `url(${Fon})` }}
          >
            <Link className="link " to={`/post/${carousels3.id}`}>
              <img
                className="d-block h-1005 akcia"
                src={carousels3.image}
                alt="Third slide"
              />
            </Link>

            <Carousel.Caption className="carousel_text">
              <Link className="link" to={`/post/${carousels3.id}`}>
                <h4>{leng.h4}</h4>
                <h3>
                         S H A R E -20%        S H A R E -20%        S H A R E
                  -20%
                </h3>
                <h5>-20%</h5>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default SSCarousels;
