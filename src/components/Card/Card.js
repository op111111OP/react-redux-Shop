import React, { useContext, useEffect, useState } from "react";
import "./Card.css";
import { Button } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useParams } from "react-router";
import Context from "../../common/context";
import Layout from "../Layout/Layout";

function Card() {
  const id = useParams().id || "";
  const { know, leng } = useContext(Context);
  const [element, setElement] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((result) => setElement(result));
  }, [id]);

  return (
    <Layout>
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
            <Heart color="grin" size={20} className="heart_defense" />
            <Button
              className="electronics_but"
              size="sm"
              variant="success"
              onClick={(e) => {
                //  getPosts(e.target.id);
                //  onYas();
                //  setOnTrue((a) => !a);
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
