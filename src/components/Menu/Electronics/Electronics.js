import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Electronics.css";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Heart } from "react-bootstrap-icons";
// App
function Electronics() {
  const { know, leng, colorMenu, electronics } = useContext(Context);

  return (
    <Layout>
      <div className="container">
        <div className="electronics_box">
          {electronics.map((item) => (
            <div className="electronics_elem" key={item.id}>
              <div>
                <Link className="link" to="/3m">
                  <div className="electronics_container_img">
                    <img src={item.image} className="electronics_img" />
                  </div>
                </Link>
                <div className="price">
                  <Link className="link" to="/3m">
                    {leng.price} {item.price}
                    <span>{leng.uah}</span>
                  </Link>
                  <Link className="link link_heart" to="/basket">
                    <Heart color="grin" size={18} />
                  </Link>
                </div>
                <div className="rete">
                  <Link className="link" to="/3m">
                    {leng.rating} {item.rating.rate}
                  </Link>
                  <Link className="link" to="/2m">
                    <Button
                      className="electronics_but"
                      size="sm"
                      variant="success"
                    >
                      {leng.buy}
                    </Button>
                  </Link>
                </div>
                <Link className="link" to="/3m">
                  <div className="title"> {item.title}</div>
                </Link>
              </div>
              <Link className="link" to="/3m">
                <div className="descriprion">{item.description}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Electronics;
