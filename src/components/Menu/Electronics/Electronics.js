import React from "react";
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
            <Link className="link" to="/3m" key={item.id}>
              <div className="electronics_elem">
                <div className="electronics_container_img">
                  <img src={item.image} className="electronics_img" />
                </div>
                <div className="price">
                  <div>
                    Price: {item.price}
                    <span>uah.</span>
                  </div>
                  <Link className="link link_heart" to="/basket">
                    <Heart color="grin" size={18} />
                  </Link>
                </div>
                <div className="rete">
                  <span> rating: {item.rating.rate}</span>
                  <Link className="link" to="/2m">
                    <Button
                      className="electronics_but"
                      size="sm"
                      variant="success"
                    >
                      {leng.themeC}
                    </Button>
                  </Link>
                </div>
                <div> {item.title}</div>
                <div>{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Electronics;
