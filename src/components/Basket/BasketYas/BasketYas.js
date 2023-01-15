import React from "react";
import "./BasketYas.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../../common/context";
import Button from "react-bootstrap/Button";
// Basket
function BasketYas() {
  const { know, onCard, leng } = useContext(Context);

  return (
    <div className="container card_box">
      <div className="container_cards">
        {onCard.map((item, index) => (
          <div key={item.id} className="card_conteiner">
            <Link className="link link_card" to="/3m">
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
                <div> {item.rating.count}</div>
                <div> {item.rating.count}</div>
                <div> {item.rating.count}</div>
                <div className="card_but_conteiner">
                  <Button
                    className="electronics_but card_but"
                    size="sm"
                    variant="success"
                  >
                    {leng.buy}
                  </Button>
                  <div> {item.rating.count}</div>
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
