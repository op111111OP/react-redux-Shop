import Layout from "../Layout/Layout";
import { Button } from "react-bootstrap";
import "./Home.css";
import Carousels from "./Carousels/Carousels";
import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import { Heart, HeartFill } from "react-bootstrap-icons";

import Context from "../../common/context";
import Element from "../Menu/Element/Element";
import ElementDefense from "../Menu/Element/ElementDefense";
// import { store } from "..";

// App
function Home() {
  const { know, item, leng, lenElectronicsTitl, lenElectronicsDes, onYas, n } =
    useContext(Context);
  const [onTrue, setOnTrue] = useState(false);
  const [posts, setPosts] = useState("");
  const [e, setE] = useState("");
  const [onTrueOne, setOnTrueOne] = useState(false);
  return (
    <Layout>
      <div className="home">
        <Carousels />

        {posts === "" ? false : <Element posts={posts} onTrue={onTrue} />}
        {e === "" ? false : <ElementDefense e={e} onTrueOne={onTrueOne} />}
        <div className="container">
          <div className="electronics_box">
            {item.map((item) => (
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
                  <div className="descriprion">
                    {know ? lenElectronicsDes[item.id - 1] : item.description}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Home;
