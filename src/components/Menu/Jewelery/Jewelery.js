import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Jewelery.css";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import Button from "react-bootstrap/Button";
import { Heart } from "react-bootstrap-icons";
import Element from "../Element/Element";
// App
function Jewelery() {
  const {
    know,
    leng,
    jewelery,
    lenElectronicsTitl,
    lenElectronicsDes,
    onYas,
    addIcon,
  } = useContext(Context);
  const [onTrue, setOnTrue] = useState(false);
  const [posts, setPosts] = useState("");

  // -----
  function onIcon(e) {
    fetch("https://fakestoreapi.com/products/" + e)
      .then((res) => res.json())
      .then((result) => addIcon(result, e));
  }

  return (
    <Layout>
      {posts === "" ? false : <Element posts={posts} onTrue={onTrue} />}
      <div className="container">
        <div className="electronics_box">
          {jewelery.map((item, index) => (
            <div className="electronics_elem" key={item.id}>
              <div>
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="electronics_container_img">
                    <img src={item.image} className="electronics_img" />
                  </div>
                </Link>
                <div className="price">
                  <Link className="link" to={`/post/${item.id}`}>
                    {leng.price} {item.price}
                    <span>{leng.uah}</span>
                  </Link>

                  <Heart
                    color="grin"
                    size={18}
                    className="heart_defense"
                    onClick={(e) => {
                      onIcon(e.target.id);
                    }}
                    id={item.id}
                  />
                </div>
                <div className="rete">
                  <Link className="link" to={`/post/${item.id}`}>
                    {leng.rating} {item.rating.rate}
                  </Link>

                  <Button
                    className="electronics_but"
                    size="sm"
                    variant="success"
                    onClick={(e) => {
                      setPosts(e.target.id);
                      onYas();
                      setOnTrue((a) => !a);
                    }}
                    id={item.id}
                  >
                    {leng.buy}
                  </Button>
                </div>
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="title">
                    {know ? lenElectronicsTitl[index] : item.title}
                  </div>
                </Link>
              </div>
              <Link className="link" to={`/post/${item.id}`}>
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

export default Jewelery;
