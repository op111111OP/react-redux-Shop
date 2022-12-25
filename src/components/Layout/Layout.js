import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import "./Layout.css";
import Context from "../../common/context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
// Home

function Layout({ children }) {
  const { leng, returs, classSet } = useContext(Context);
  const [counts, setState] = useState(true);
  const [len, setLen] = useState(true);
  const [classSection, setSection] = useState(true);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: leng.languageU, value: "1" },
    { name: leng.languageE, value: "2" },
  ];
  useEffect(() => {
    returs(len);
  }, [len]);
  useEffect(() => {
    classSet(classSection);
  }, [classSection]);

  return (
    <div className="wrapper">
      <header>
        <div className="header_container">
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
            {leng.defense}
          </Link>
          <Link className="link" to="/profile">
            {leng.profile}
          </Link>
          <Link className="link" to="/basket">
            {leng.basket}
          </Link>

          <Button
            size="sm"
            variant="outline-primary"
            onClick={() =>
              setState((prevState) => !prevState) || setSection((s) => !s)
            }
          >
            {counts ? leng.themeC : leng.themeT}
          </Button>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                size="sm"
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-primary" : "outline-primary"}
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
        <div className={classSection ? "light_color manu" : "dark_color manu"}>
          wwwwwwwwwwwww
        </div>
      </header>
      <section className={classSection ? "light" : "dark"}>
        <div className="container">{children}</div>
      </section>
      <footer className="footer">footer</footer>
    </div>
  );
}
// export count
export default Layout;
