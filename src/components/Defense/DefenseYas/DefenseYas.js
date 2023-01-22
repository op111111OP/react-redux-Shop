import React, { useContext } from "react";
import { XCircle } from "react-bootstrap-icons";
import Context from "../../../common/context";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// App
function DefenseYas() {
  const { defenseCard } = useContext(Context);
  return (
    <div className="container card_box">
      <div className="container_cards">
        {defenseCard.map((item) => (
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
                <div> {item.price}грн.</div>

                <div className="card_but_conteiner">
                  <Button
                    className="electronics_but card_but"
                    size="sm"
                    variant="success"
                  >
                    Оформити замовлення
                  </Button>
                  <div>
                    <XCircle
                      color="grin"
                      size={21}
                      className="cart cart_cirle"
                    />
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

export default DefenseYas;
