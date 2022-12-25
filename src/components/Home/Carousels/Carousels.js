import React from "react";
import "./Carousels.css";
import { useContext, useState, useEffect } from "react";
import Context from "../../../common/context";
import { Link } from "react-router-dom";

// Home
function Carousels() {
  const { categories, know, lenCategories } = useContext(Context);
  const [switchs, setSwitchs] = useState(lenCategories);
  useEffect(() => {
    know ? setSwitchs(lenCategories) : setSwitchs(categories);
  }, [know]);

  return (
    <div className="carousels_cont">
      <div className="carousels_menu">
        <ul>
          {switchs.map((item, index) => (
            <li key={index}>
              <Link className="link" to={`/${index}`}>
                {index + 1}. {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="carousels"></div>
    </div>
  );
}

export default Carousels;
