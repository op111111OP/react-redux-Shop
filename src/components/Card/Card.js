import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useParams } from "react-router";
import Context from "../../common/context";
import Layout from "../Layout/Layout";

function Card() {
  const id = useParams().id || "";
  const {
    know,
    leng,
    lenElectronicsTitl,
    lenElectronicsDes,
    addElement,
    onYas,
  } = useContext(Context);
  const [element, setElement] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((result) => setElement(result));
  }, [id]);
  console.log(element);
  return (
    <Layout>
      <div>
        <div className="electronics_container_img">
          <img src={element.image} className="electronics_img" />
        </div>
        <div>
          <div className="title">{element.title}</div>
          <div>
            <div>
              <div className="">
                {leng.price} {element.price}
                <span>{leng.uah}</span>
              </div>
              <div className="">
                {leng.rating} {element.rating.rate}
              </div>
            </div>
            <Heart color="grin" size={18} className="heart_defense" />
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
          <div className="description">{element.description}</div>
        </div>
      </div>
    </Layout>
  );
}

export default Card;
