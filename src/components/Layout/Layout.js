import { Link } from "react-router-dom";
import React from "react";
import {
  ArrowDownCircleFill,
  ArrowUpCircleFill,
  Cart3,
  Globe,
  Heart,
  Person,
  X,
} from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import "./Layout.css";
import Context from "../../common/context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Computer from "../public/iconc/computer.png";
import Diamond from "../public/iconc/diamond.png";
import Fut from "../public/iconc/fut.png";
import Womans from "../public/iconc/womans.png";
import Footer from "./Footer/Footer";
import { Modal } from "react-bootstrap";

// Home

function Layout({ children }) {
  const { leng, returs, classSet, categories, lenCategories, number } =
    useContext(Context);
  const [counts, setState] = useState(true);
  const [len, setLen] = useState(true);
  const [classSection, setSection] = useState(true);
  const [mouse, setMouse] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const [switchs, setSwitchs] = useState(lenCategories);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const areuMenu = [Computer, Diamond, Fut, Womans];
  const radios = [
    { name: leng.languageU, value: "1" },
    { name: leng.languageE, value: "2" },
  ];
  useEffect(() => {
    returs(len);
    len ? setSwitchs(lenCategories) : setSwitchs(categories);
  }, [len]);
  useEffect(() => {
    classSet(classSection);
  }, [classSection]);

  return (
    <div className="wrapper">
      <header>
        <div className="header_container container">
          <div>
            <span className="K">К</span>
            <span className="a1">а</span>
            <span className={classSection ? "light_color c" : "dark_color c"}>
              с
            </span>
            <span className="t">т</span>
            <span className="a">а</span>
          </div>
          <Link className="link" to="/">
            {leng.home}
          </Link>
          <Link className="link" to="/defense">
            <Heart color="grin" size={18} className="cart" />
            {leng.defense}
          </Link>
          <div className="link profile" onClick={handleShow}>
            <Person color="grin" size={21} className="cart" />
            {leng.profile}
          </div>
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <Link className="link link_baslet" to="/basket">
            <Cart3 color="grin" size={21} className="cart" />
            <div>{leng.basket}</div>
            <div className="basket_number">{number}</div>
          </Link>

          <Button
            className="but_theme"
            size="sm"
            variant={counts ? "outline-secondary" : "outline-success"}
            onClick={() =>
              setState((prevState) => !prevState) || setSection((s) => !s)
            }
          >
            {counts ? leng.themeC : leng.themeT}
          </Button>
          <div
            className="language_box"
            onMouseOver={() => {
              setMouse(true);
            }}
            onMouseOut={() => {
              setMouse(false);
            }}
          >
            <Globe
              color={mouse ? "rgba(23, 124, 28, 0)" : "rgba(23, 124, 28, 0.24)"}
              size={25}
            />
            <ButtonGroup
              className={mouse ? "language_but_true" : "language_but"}
            >
              {radios.map((radio, idx) => (
                <ToggleButton
                  size="sm"
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? "outline-success" : "outline-success"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  onClick={() => (idx % 2 ? setLen(false) : setLen(true))}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        </div>
        <div
          className={
            classSection ? "light_color manu_home" : "dark_color manu_home"
          }
        >
          {/* <div className="ul_menu"> */}
          {switchs.map((item, index) => (
            <div key={index} className="li_menu_home ">
              <Link
                className={
                  classSection ? "none light_color" : "none dark_color "
                }
                to={`/${index}m`}
              >
                <div
                  className={
                    classSection ? "menu_box menu_boxC" : "menu_box menu_boxT"
                  }
                >
                  <img src={areuMenu[index]} className="iconMenu" /> {item}
                </div>
              </Link>
            </div>
          ))}
          {/* </div> */}
        </div>
      </header>
      <section className={classSection ? "light" : "dark"}>
        <div className="container">{children}</div>
      </section>
      <div className="fixed_box">
        <a href="#top" title="Вгору" className="fixed_a">
          <ArrowUpCircleFill
            color={classSection ? "rgb(39, 38, 38)" : "rgb(222, 222, 222)"}
            size="40"
          />
        </a>
        <a href="#footer" title="Вгору" className="fixed_a">
          <ArrowDownCircleFill
            color={classSection ? "rgb(39, 38, 38)" : "rgb(222, 222, 222)"}
            size="40"
          />
        </a>
      </div>
      <footer id="footer" className="dark-footer">
        <Footer />
      </footer>
    </div>
  );
}
// export count
export default Layout;
