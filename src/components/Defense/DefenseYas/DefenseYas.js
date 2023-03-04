import React, { useContext, useEffect, useState } from "react";
import "./DefenseYas.css";
import { XCircle } from "react-bootstrap-icons";
import Context from "../../../common/context";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Element from "../../Menu/Element/Element";
import MarkedHeart from "../../MarkedHeart";

// App
function DefenseYas() {
  const { defenseCard, idElem, cardDefense, leng, onYas } = useContext(Context);
  //   const [twoCard, setTwoCard] = useLocalStorage("twoCard", defenseCard);
  //   const [twoId, setTwoId] = useLocalStorage("twoId", idElem);
  console.log(defenseCard, idElem);
  const [twoCard, setTwoCard] = useState(defenseCard);
  const [twoId, setTwoId] = useState(idElem);
  const [eId, setEId] = useState("");
  const [twoTrue, setTwoTrue] = useState(false);
  const [onTrue, setOnTrue] = useState(false);
  const [posts, setPosts] = useState("");
  useEffect(() => {
    if (eId !== "") {
      twoId.map((item, index) =>
        Number(item) === Number(eId)
          ? setTwoCard([
              ...twoCard.slice(0, index),
              ...twoCard.slice(index + 1),
            ])
          : true
      );
      twoId.map((item, index) =>
        Number(item) === Number(eId)
          ? setTwoId([...twoId.slice(0, index), ...twoId.slice(index + 1)])
          : true
      );
      setTwoTrue((a) => !a);
    }
  }, [eId, twoCard, twoId]);
  useEffect(() => {
    if (eId !== "") {
      cardDefense(twoCard, twoId);
    }
  }, [twoTrue]);

  return (
    <div className="container card_box">
      <MarkedHeart eId={eId} />
      {posts === "" ? false : <Element posts={posts} onTrue={onTrue} />}
      <div className="container_cards">
        {defenseCard.map((item) => (
          <div key={item.id} className="card_conteiner">
            <Link
              className="link link_card link_defense"
              to={`/post/${item.id}`}
            >
              <div className="goods_card">
                <div className="card_conteiner_img">
                  <img src={item.image} className="card_img" alt="" />
                </div>
                <div className="card_title"> {item.title}</div>
              </div>
            </Link>

            <div className="defense_numbers">
              <div className="defense_description">{item.description}</div>
              <div className="card_but_conteiner">
                <div className="defense_price">
                  {" "}
                  {item.price}
                  {leng.uah}
                </div>
                <Button
                  className="electronics_but but"
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
                <div className="XCircle_box">
                  <XCircle color="grin" size={21} />
                  <div
                    className="cart cart_cirle"
                    onClick={(e) => {
                      setEId(e.target.id);
                    }}
                    id={item.id}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DefenseYas;
