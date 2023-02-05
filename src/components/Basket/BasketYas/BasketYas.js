import React, { useEffect, useState } from "react";
import "./BasketYas.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../../common/context";
import Button from "react-bootstrap/Button";
import { XCircle } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useLocalStorageObject } from "react-use-window-localstorage";

// Basket
function BasketYas() {
  const { know, onCard, leng, id, card, onNo } = useContext(Context);
  //   const [twoCard, setTwoCard] = useLocalStorageObject("a", onCard);
  const [twoCard, setTwoCard] = useState(onCard);
  const [twoId, setTwoId] = useState(id);
  const [eId, setEId] = useState("");
  const [onTrue, setOnTrue] = useState(false);
  const [twoTrue, setTwoTrue] = useState(false);
  const [forTrue, setForTrue] = useState(0);

  useEffect(() => {
    if (eId != "") {
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
      setOnTrue((a) => !a);
    }
  }, [eId]);
  useEffect(() => {
    if (eId != "") {
      card(twoCard, twoId);
    }
  }, [onTrue]);
  function addValue(e, e1) {
    setTwoCard([
      ...twoCard.slice(0, Number(e)),
      { ...twoCard[Number(e)], amount: onCard[Number(e)].amount * e1 },
      ...twoCard.slice(Number(e) + 1),
    ]);
    setTwoTrue((a) => !a);
    setForTrue(1);
  }

  //   useEffect(() => {
  //     setTwoCard(value);
  //   }, []);
  return (
    <div className="container card_box">
      <div className="container_cards">
        {twoCard.map((item, index) => (
          <div key={item.id} className="card_conteiner">
            <Link className="link link_card" to={`/post/${item.id}`}>
              <div className="card_text">товар</div>
              <div className="goods_card">
                <div className="card_conteiner_img">
                  <img src={item.image} className="card_img" />
                </div>
                <div className="card_title"> {item.title}</div>
              </div>
            </Link>
            <div className="card_conteiner_numbers">
              <div className="card_conteiner_text">
                <div>кількість</div>
                <div>ціна</div>
                <div>сума</div>
              </div>
              <div className="card_numbers">
                <div>
                  <select
                    id={index}
                    onChange={(e) => {
                      addValue(e.target.id, e.target.value);
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div> {item.price}грн.</div>
                <div> {item.amount}грн.</div>
                <div className="card_but_conteiner">
                  <Button
                    className="electronics_but card_but"
                    size="sm"
                    variant="success"
                  >
                    Оформити замовлення
                  </Button>
                  <div className="XCircle_box">
                    <XCircle color="grin" size={21} />
                    <div
                      className="cart cart_cirle"
                      onClick={(e) => {
                        setEId(e.target.id);
                        onNo();
                      }}
                      id={item.id}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasketYas;
