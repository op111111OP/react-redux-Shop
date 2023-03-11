import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Women.css";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Heart, HeartFill } from "react-bootstrap-icons";
import Element from "../Element/Element";
import ElementDefense from "../Element/ElementDefense";
import { useMarkedHeart } from "../../Home/useMarkedHeart";
import { useMarkedHeartWomen } from "./useMarkedHeartWomen";
import MarkedHeart from "../../MarkedHeart";

// App
function Women() {
  const {
    know,
    leng,
    womens,
    lenElectronicsTitl,
    lenElectronicsDes,
    onYas,
    item,
  } = useContext(Context);
  const [onTrue, setOnTrue] = useState(false);
  const [posts, setPosts] = useState("");
  const [e, setE] = useState("");
  const [onTrueOne, setOnTrueOne] = useState(false);

  // -----
  //   сердечка
  const { clickedIds, handleClick, onMarkedHeartIds } = useMarkedHeart(item);

  const { clickedIdsWomen, handleClickWomen, refs, onMarkedHeartIdsWomen } =
    useMarkedHeartWomen(womens);

  return (
    <Layout>
      <MarkedHeart
        clickedIds={clickedIds}
        onMarkedHeartIds={onMarkedHeartIds}
        clickedIdsWomen={clickedIdsWomen}
        onMarkedHeartIdsWomen={onMarkedHeartIdsWomen}
      />
      {posts === "" ? false : <Element posts={posts} onTrue={onTrue} />}
      {e === "" ? false : <ElementDefense e={e} onTrueOne={onTrueOne} />}
      <div className="container">
        <div className="electronics_box">
          {womens.map((item) => (
            <div className="electronics_elem" key={item.id}>
              <div>
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="electronics_container_img">
                    <img src={item.image} className="electronics_img" alt="" />
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
                        clickedIdsWomen.includes(item.id)
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
                        handleClickWomen(item.id);
                        handleClick(item.id);
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

export default Women;
