import React, { useContext, useEffect, useState } from "react";
import "./DefenseYas.css";
import { XCircle } from "react-bootstrap-icons";
import Context from "../../../common/context";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// App
function DefenseYas() {
  const { defenseCard, idElem, cardDefense } = useContext(Context);
  const [twoCard, setTwoCard] = useState(defenseCard);
  const [twoId, setTwoId] = useState(idElem);
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
      cardDefense(twoCard, twoId);
    }
  }, [onTrue]);

  return (
    <div className="container card_box">
      <div className="container_cards">
        {defenseCard.map((item) => (
          <div key={item.id} className="card_conteiner">
            <Link
              className="link link_card link_defense"
              to={`/post/${item.id}`}
            >
              <div className="goods_card">
                <div className="card_conteiner_img">
                  <img src={item.image} className="card_img" />
                </div>
                <div className="card_title"> {item.title}</div>
              </div>
            </Link>

            <div className="defense_numbers">
              <div className="defense_description">{item.description}</div>
              <div className="defense_price"> {item.price}грн.</div>

              <div className="card_but_conteiner">
                <Button
                  className="electronics_but but"
                  size="sm"
                  variant="success"
                >
                  купити
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
