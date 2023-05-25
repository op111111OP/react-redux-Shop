import Layout from "../Layout/Layout";
import LazyLoad from "react-lazyload";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";
import "./Home.css";
import Carousels from "./Carousels/Carousels";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Context from "../../common/context";
import Element from "../Menu/Element/Element";
import ElementDefense from "../Menu/Element/ElementDefense";
import MarkedHeart from "../MarkedHeart";
import { useMarkedHeart } from "./useMarkedHeart";
import { useMarkedHeartElectronics } from "../Menu/Electronics/useMarkedHeaetElectronics";
import { useMarkedHeartMen } from "../Menu/Men/useMarkedHeartMen";
import { useMarkedHeartJewelery } from "../Menu/Jewelery/useMarkedHeartJewelery";
import { useMarkedHeartWomen } from "../Menu/Women/useMarkedHeartWomen";

// App
function Home() {
  const {
    know,
    item,
    leng,
    lenElectronicsTitl,
    lenElectronicsDes,
    onYas,
    electronics,
    mens,
    jewelery,
    womens,
  } = useContext(Context);
  const [onTrue, setOnTrue] = useState(false);
  const [posts, setPosts] = useState("");
  const [e, setE] = useState("");
  const [onTrueOne, setOnTrueOne] = useState(false);
  //   сердечка
  const { clickedIds, handleClick, refs, onMarkedHeartIds } =
    useMarkedHeart(item);
  // ---
  const {
    handleClickElectronics,
    onMarkedHeartIdsElectronics,
    clickedIdsElectronics,
  } = useMarkedHeartElectronics(electronics);
  //   ---
  const { handleClickMen, onMarkedHeartIdsMen, clickedIdsMen } =
    useMarkedHeartMen(mens);
  const { clickedIdsJewelery, handleClickJewelery, onMarkedHeartIdsJewelery } =
    useMarkedHeartJewelery(jewelery);
  const { clickedIdsWomen, handleClickWomen, onMarkedHeartIdsWomen } =
    useMarkedHeartWomen(womens);

  return (
    <Layout>
      <div className="home">
        <Carousels />
        <MarkedHeart
          clickedIdsElectronics={clickedIdsElectronics}
          onMarkedHeartIdsElectronics={onMarkedHeartIdsElectronics}
          clickedIds={clickedIds}
          onMarkedHeartIds={onMarkedHeartIds}
          clickedIdsMen={clickedIdsMen}
          onMarkedHeartIdsMen={onMarkedHeartIdsMen}
          clickedIdsJewelery={clickedIdsJewelery}
          onMarkedHeartIdsJewelery={onMarkedHeartIdsJewelery}
          clickedIdsWomen={clickedIdsWomen}
          onMarkedHeartIdsWomen={onMarkedHeartIdsWomen}
        />
        {posts === "" ? false : <Element posts={posts} onTrue={onTrue} />}
        {e === "" ? false : <ElementDefense e={e} onTrueOne={onTrueOne} />}
        <div className="container">
          <div className="electronics_box">
            {item.map((item) => (
              <div className="electronics_elem" key={item.id}>
                <div>
                  <Link className="link" to={`/post/${item.id}`}>
                    <div
                      className="electronics_container_img"
                      style={
                        item.id === 8
                          ? { marginBottom: 60 }
                          : { marginBottom: 15 }
                      }
                    >
                      <LazyLoad
                        once
                        placeholder={<Spinner animation="border" />}
                      >
                        <img
                          src={item.image}
                          className="electronics_img"
                          alt=""
                        />
                      </LazyLoad>
                    </div>
                  </Link>
                  <div className="price">
                    <Link className="link" to={`/post/${item.id}`}>
                      {leng.price} {item.price}
                      <span>{leng.uah}</span>
                    </Link>

                    <div className="icon_box">
                      <div
                        ref={(el) =>
                          refs[item.id - 1] && (refs[item.id - 1].current = el)
                        }
                        className={
                          clickedIds.includes(item.id)
                            ? "icon_block"
                            : "icon_none"
                        }
                      >
                        <HeartFill color="firebrick" size={18} />
                      </div>
                      <Heart
                        color="grin"
                        size={18}
                        className="heart_defense"
                        onClick={(e) => {
                          setE(e.target.id);
                          setOnTrueOne((a) => !a);
                          handleClick(item.id);
                          handleClickElectronics(item.id);
                          handleClickMen(item.id);
                          handleClickJewelery(item.id);
                          handleClickWomen(item.id);
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
