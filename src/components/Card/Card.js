import React, { useContext, useEffect, useState } from "react";
import "./Card.css";
import { Button } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useParams } from "react-router";
import Context from "../../common/context";
import Layout from "../Layout/Layout";
import Element from "../Menu/Element/Element";
import ElementDefense from "../Menu/Element/ElementDefense";

function Card() {
  const id = useParams().id || "";
  const { leng, onYas, n } = useContext(Context);
  const [element, setElement] = useState({});
  const [onTrue, setOnTrue] = useState(false);
  const [posts, setPosts] = useState("");
  const [e, setE] = useState("");
  const [onTrueOne, setOnTrueOne] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((result) => setElement(result));
  }, [id]);

  return (
    <Layout>
      {posts === "" ? false : <Element posts={posts} onTrue={onTrue} />}
      {e === "" ? false : <ElementDefense e={e} onTrueOne={onTrueOne} />}
      <div className="card_box  card_elem">
        <div className="electronics_container_img element_container_img">
          <img src={element.image} className=" element_img" />
        </div>
        <div className="element_container_text">
          <div className="title">{element.title}</div>
          <div className="s">
            {leng.price} {element.price}
            <span>{leng.uah}</span>
          </div>

          <div className="element_container_but">
            <div className="icon_box">
              <div ref={n[Number(element.id)]} className="icon_none">
                <HeartFill color="firebrick" size={20} />
              </div>
              <Heart
                color="grin"
                size={20}
                className="heart_defense"
                onClick={(e) => {
                  setE(e.target.id);
                  setOnTrueOne((a) => !a);
                  n[Number(element.id)].current.className = "icon_block";
                }}
                id={element.id}
              />
            </div>
            <Button
              className="electronics_but"
              size="sm"
              variant="success"
              onClick={(e) => {
                setPosts(e.target.id);
                onYas();
                setOnTrue((a) => !a);
              }}
              id={id}
            >
              {leng.buy}
            </Button>
          </div>
          <div className="element_description">{element.description}</div>
        </div>
      </div>
    </Layout>
  );
}

export default Card;
