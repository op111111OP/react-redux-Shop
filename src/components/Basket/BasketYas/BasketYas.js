import React, { useEffect, useState } from "react";
import "./BasketYas.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../../common/context";
import Button from "react-bootstrap/Button";
import { XCircle } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
// Basket
function BasketYas() {
  const { know, onCard, leng, id, card, onNo } = useContext(Context);
  const [twoCard, setTwoCard] = useState(onCard);
  const [twoId, setTwoId] = useState(id);
  const [eId, setEId] = useState("");
  const [onTrue, setOnTrue] = useState(false);

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

  return (
    <div className="container card_box">
      <div className="container_cards">
        {twoCard.map((item) => (
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
                <div> {item.num}</div>
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
