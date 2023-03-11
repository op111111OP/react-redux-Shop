import React, { useContext, useEffect, useState } from "react";
import "./Card.css";
import { Button } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useParams } from "react-router";
import Context from "../../common/context";
import Layout from "../Layout/Layout";
import Element from "../Menu/Element/Element";
import ElementDefense from "../Menu/Element/ElementDefense";
import { useMarkedHeart } from "../Home/useMarkedHeart";
import MarkedHeart from "../MarkedHeart";
import { useMarkedHeartCard } from "./useMarkedHeartCard";
import { useMarkedHeartElectronics } from "../Menu/Electronics/useMarkedHeaetElectronics";
import { useMarkedHeartJewelery } from "../Menu/Jewelery/useMarkedHeartJewelery";
import { useMarkedHeartMen } from "../Menu/Men/useMarkedHeartMen";
import { useMarkedHeartWomen } from "../Menu/Women/useMarkedHeartWomen";

function Card() {
  const {
    leng,
    onYas,
    item,
    electronics,
    jewelery,
    mens,
    womens,
    lenElectronicsDes,
    lenElectronicsTitl,
    know,
  } = useContext(Context);
  const id = useParams().id || "";
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
  // -----
  //   сердечка
  const { clickedIds, handleClick, onMarkedHeartIds } = useMarkedHeart(item);
  const {
    handleClickElectronics,
    onMarkedHeartIdsElectronics,
    clickedIdsElectronics,
  } = useMarkedHeartElectronics(electronics);
  const { clickedIdsJewelery, handleClickJewelery, onMarkedHeartIdsJewelery } =
    useMarkedHeartJewelery(jewelery);
  const { clickedIdsMen, handleClickMen, onMarkedHeartIdsMen } =
    useMarkedHeartMen(mens);
  const { clickedIdsWomen, handleClickWomen, onMarkedHeartIdsWomen } =
    useMarkedHeartWomen(womens);
  const { handleClickCard, setHandleClickCard } = useMarkedHeartCard(
    id,
    clickedIds
  );

  return (
    <Layout>
      <MarkedHeart
        clickedIds={clickedIds}
        onMarkedHeartIds={onMarkedHeartIds}
        onMarkedHeartIdsElectronics={onMarkedHeartIdsElectronics}
        clickedIdsElectronics={clickedIdsElectronics}
        clickedIdsJewelery={clickedIdsJewelery}
        onMarkedHeartIdsJewelery={onMarkedHeartIdsJewelery}
        clickedIdsMen={clickedIdsMen}
        onMarkedHeartIdsMen={onMarkedHeartIdsMen}
        clickedIdsWomen={clickedIdsWomen}
        onMarkedHeartIdsWomen={onMarkedHeartIdsWomen}
      />
      {posts === "" ? false : <Element posts={posts} onTrue={onTrue} />}
      {e === "" ? false : <ElementDefense e={e} onTrueOne={onTrueOne} />}
      <div className="card_box  card_elem">
        <div className="electronics_container_img element_container_img">
          <img src={element.image} className=" element_img" alt="" />
        </div>
        <div className="element_container_text">
          <div className="title">
            {know ? lenElectronicsTitl[id - 1] : element.title}
          </div>
          <div className="s">
            {leng.price} {element.price}
            <span>{leng.uah}</span>
          </div>

          <div className="element_container_but">
            <div className="icon_box">
              <div className={handleClickCard}>
                <HeartFill color="firebrick" size={20} />
              </div>
              <Heart
                color="grin"
                size={20}
                className="heart_defense"
                onClick={(e) => {
                  setE(e.target.id);
                  setOnTrueOne((a) => !a);
                  setHandleClickCard("icon_block");
                  handleClick(element.id);
                  handleClickElectronics(element.id);
                  handleClickJewelery(element.id);
                  handleClickMen(element.id);
                  handleClickWomen(element.id);
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
                onYas(e.target.id);
                setOnTrue((a) => !a);
              }}
              id={element.id}
            >
              {leng.buy}
            </Button>
          </div>
          <div className="element_description">
            {know ? lenElectronicsDes[id - 1] : element.description}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Card;
