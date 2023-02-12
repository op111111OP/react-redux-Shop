import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Electronics.css";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill } from "react-bootstrap-icons";
// import { store } from "../..";
import Element from "../Element/Element";
import ElementDefense from "../Element/ElementDefense";

// App
function Electronics() {
  const {
    know,
    leng,
    electronics,
    lenElectronicsTitl,
    lenElectronicsDes,
    onYas,
    n,
  } = useContext(Context);
  const [onTrue, setOnTrue] = useState(false);
  const [posts, setPosts] = useState("");
  const [e, setE] = useState("");
  const [onTrueOne, setOnTrueOne] = useState(false);

  // -----

  return (
    <Layout>
      {posts === "" ? false : <Element posts={posts} onTrue={onTrue} />}
      {e === "" ? false : <ElementDefense e={e} onTrueOne={onTrueOne} />}
      <div className="container">
        <div className="electronics_box">
          {electronics.map((item) => (
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
                  <div className="icon_box">
                    <div ref={n[Number(item.id)]} className="icon_none">
                      <HeartFill color="firebrick" size={18} />
                    </div>
                    <Heart
                      color="grin"
                      size={18}
                      className="heart_defense"
                      onClick={(e) => {
                        setE(e.target.id);
                        setOnTrueOne((a) => !a);
                        n[Number(item.id)].current.className = "icon_block";
                      }}
                      id={item.id}
                    />
                  </div>
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
                      onYas(e.target.id);
                      setOnTrue((a) => !a);
                    }}
                    id={item.id}
                  >
                    {leng.buy}
                  </Button>
                </div>
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="title">
                    {know ? lenElectronicsTitl[item.id - 1] : item.title}
                  </div>
                </Link>
              </div>
              <Link className="link" to={`/post/${item.id}`}>
                <div className="description">
                  {know ? lenElectronicsDes[item.id - 1] : item.description}
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
