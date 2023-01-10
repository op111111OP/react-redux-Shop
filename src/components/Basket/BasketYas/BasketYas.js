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
    <div>
      <div>
        {onCard.map((item, index) => (
          <div key={item.id} className="card_conteiner">
            <div className="card_conteiner_text">
              <div>товар</div>
              <div>кількість</div>
              <div>ціна</div>
              <div>сума</div>
            </div>
            <div>
              <Link className="link" to="/3m">
                <div className="card_conteiner_img">
                  <img
                    src={item.image}
                    width="300"
                    height="250"
                    className="card_img"
                  />
                </div>
                <div> {item.title}</div>
              </Link>
              <div> {item.rating.count}</div>
              <div> {item.rating.count}</div>
              <div> {item.rating.count}</div>
              <Button className="electronics_but" size="sm" variant="success">
                {leng.buy}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasketYas;
