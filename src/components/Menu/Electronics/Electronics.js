import React from "react";
import { Link } from "react-router-dom";
import "./Electronics.css";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import { useContext } from "react";
// App
function Electronics() {
  const { know, leng, colorMenu, electronics } = useContext(Context);
  return (
    <Layout>
      <div className="container">
        <div className="electronics_box">
          {electronics.map((item) => (
            <Link className="link" to="/basket" key={item.id}>
              <div className="electronics_elem">
                <div className="electronics_container_img">
                  <img src={item.image} className="electronics_img" />
                </div>
                <div> {item.rating.count}</div>
                <div>{item.rating.rate}</div>
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
