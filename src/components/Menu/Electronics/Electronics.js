import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Electronics.css";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Heart } from "react-bootstrap-icons";
import axios from "axios";
import { fetcReg } from "../../actions/auth.action";
import { store } from "../..";
// App
function Electronics() {
  const {
    know,
    leng,
    electronics,
    lenElectronicsTitl,
    lenElectronicsDes,
    addElement,
    onYas,
  } = useContext(Context);
  const [onTrue, setOnTrue] = useState(false);

  function getPosts(e) {
    fetch("https://fakestoreapi.com/products/" + e)
      .then((res) => res.json())
      .then((result) => addElement(result));
  }
  return (
    <Layout>
      <div className="container">
        <div className="electronics_box">
          {electronics.map((item, index) => (
            <div className="electronics_elem" key={item.id}>
              <div>
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="electronics_container_img">
                    <img src={item.image} className="electronics_img" />
                  </div>
                </Link>
                <div className="price">
                  <Link className="link" to="/3m">
                    {leng.price} {item.price}
                    <span>{leng.uah}</span>
                  </Link>

                  <Heart color="grin" size={18} className="heart_defense" />
                </div>
                <div className="rete">
                  <Link className="link" to="/3m">
                    {leng.rating} {item.rating.rate}
                  </Link>

                  <Button
                    className="electronics_but"
                    size="sm"
                    variant="success"
                    onClick={(e) => {
                      getPosts(e.target.id);
                      onYas();
                    }}
                    id={item.id}
                  >
                    {leng.buy}
                  </Button>
                </div>
                <Link className="link" to="/3m">
                  <div className="title">
                    {know ? lenElectronicsTitl[index] : item.title}
                  </div>
                </Link>
              </div>
              <Link className="link" to="/3m">
                <div className="descriprion">
                  {know ? lenElectronicsDes[index] : item.description}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Electronics;
