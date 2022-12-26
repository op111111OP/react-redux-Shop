import { List } from "react-bootstrap-icons";
import React from "react";
import "./Carousels.css";
import { useContext, useState, useEffect } from "react";
import Context from "../../../common/context";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import ImgMixa from "../../public/iconc/IMG.jpg"
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
      </div>
      <div className="carousels">

      <Carousel>
      <Carousel.Item className="carItem">
        <div><img
          className="d-block"
          src= "https://www.vitacenter.com.ua/wp-content/uploads/2022/05/akcia.png"
          alt="First slide"
        /></div>
        <Carousel.Caption>
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

        <Carousel.Caption>
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

        <Carousel.Caption>
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
