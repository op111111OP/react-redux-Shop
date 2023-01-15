import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Electronics.css";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Heart } from "react-bootstrap-icons";
import axios from "axios";
import { fetcReg } from "../../actions/auth.action";
import { store } from "../..";
import Element from "../Element/Element";
// App
function Electronics() {
  const {
    know,
    leng,
    electronics,
    lenElectronicsTitl,
    lenElectronicsDes,
    addElement,
    onYas,
  } = useContext(Context);
  const [onTrue, setOnTrue] = useState(false);
  const [price, setPrice] = useState([]);
  const [amount, setAmount] = useState("");
  const [id, setId] = useState([]);
  const [idE, setIdE] = useState([]);
  const [ee, setEe] = useState("");
  const [idNum, setIdNum] = useState([]);
  const [num, setNum] = useState("");
  const [amountNum, setAmountNum] = useState("");
  const [numberE, setNumberE] = useState("");
  const [app, setApp] = useState({});

  function getPosts(e) {
    fetch("https://fakestoreapi.com/products/" + e)
      .then((res) => res.json())
      .then((result) => addElement(result, e));
    fetch("https://fakestoreapi.com/products/" + e)
      .then((res) => res.json())
      .then((result) => setAmount(result.price));
    setEe(e);
  }

  useEffect(() => {
    setId([...id, ee]);
    if (id.indexOf(ee) === -1 && ee != "") {
      setIdE([...idE, { num: 1, id: ee, amount: amount }]);
      setIdNum([...idNum, ee]);
    }
  }, [amount]);
  useEffect(() => {
    idE.map((item, index) => (item.id === ee ? setNumberE(index) : true));
    //  setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
  }, [onTrue]);
  Element(1);
  console.log(numberE);

  return (
    <Layout>
      <div className="container">
        <div className="electronics_box">
          {electronics.map((item, index) => (
            <div className="electronics_elem" key={item.id}>
              <div>
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="electronics_container_img">
                    <img src={item.image} className="electronics_img" />
                  </div>
                </Link>
                <div className="price">
                  <Link className="link" to="/3m">
                    {leng.price} {item.price}
                    <span>{leng.uah}</span>
                  </Link>

                  <Heart color="grin" size={18} className="heart_defense" />
                </div>
                <div className="rete">
                  <Link className="link" to="/3m">
                    {leng.rating} {item.rating.rate}
                  </Link>

                  <Button
                    className="electronics_but"
                    size="sm"
                    variant="success"
                    onClick={(e) => {
                      getPosts(e.target.id);
                      onYas();
                      setOnTrue((a) => !a);
                    }}
                    id={item.id}
                  >
                    {leng.buy}
                  </Button>
                </div>
                <Link className="link" to="/3m">
                  <div className="title">
                    {know ? lenElectronicsTitl[index] : item.title}
                  </div>
                </Link>
              </div>
              <Link className="link" to="/3m">
                <div className="descriprion">
                  {know ? lenElectronicsDes[index] : item.description}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Electronics;
