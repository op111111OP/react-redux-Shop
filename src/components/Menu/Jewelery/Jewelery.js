import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Jewelery.css";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import Button from "react-bootstrap/Button";
import { Heart } from "react-bootstrap-icons";
import Element from "../Element/Element";
// App
function Jewelery() {
  const {
    know,
    leng,
    jewelery,
    lenElectronicsTitl,
    lenElectronicsDes,
    addElement,
    onYas,
  } = useContext(Context);
  const [onTrue, setOnTrue] = useState(false);
  const [twoTrue, setTwoTrue] = useState(false);
  const [threeTrue, setThreeTrue] = useState(false);
  const [fourTrue, setFourTrue] = useState(false);

  const [amount, setAmount] = useState("");
  const [id, setId] = useState([]);
  const [idE, setIdE] = useState([]);
  const [ee, setEe] = useState("");
  const [num, setNum] = useState("");
  const [amountNum, setAmountNum] = useState("");
  const [numberE, setNumberE] = useState(0);
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
    }
  }, [amount]);
  useEffect(() => {
    idE.map((item, index) =>
      item.id === ee
        ? setTwoTrue((a) => !a) ||
          setNumberE(index) ||
          setNum(item.num) ||
          setAmountNum(item.amount)
        : true
    );
    setFourTrue(false);
  }, [onTrue]);
  useEffect(() => {
    if (ee != "") {
      setIdE([
        ...idE.slice(0, numberE),
        { num: num + 1, id: ee, amount: amountNum + amount },
        ...idE.slice(numberE + 1),
      ]);
      setThreeTrue((a) => !a);
    }
  }, [twoTrue]);
  useEffect(() => {
    if (ee != "") {
      setApp({ ...idE[numberE] });
      setFourTrue(true);
    }
  }, [threeTrue]);

  return (
    <Layout>
      {fourTrue ? <Element app={app} /> : false}
      <div className="container">
        <div className="electronics_box">
          {jewelery.map((item, index) => (
            <div className="electronics_elem" key={item.id}>
              <div>
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="electronics_container_img">
                    <img src={item.image} className="electronics_img" />
                  </div>
                </Link>
                <div className="price">
                  <Link className="link" to={`/post/${item.id}`}>
                    {leng.price} {item.price}
                    <span>{leng.uah}</span>
                  </Link>

                  <Heart color="grin" size={18} className="heart_defense" />
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
                      getPosts(e.target.id);
                      onYas();
                      setOnTrue((a) => !a);
                    }}
                    id={item.id}
                  >
                    {leng.buy}
                  </Button>
                </div>
                <Link className="link" to={`/post/${item.id}`}>
                  <div className="title">
                    {know ? lenElectronicsTitl[index] : item.title}
                  </div>
                </Link>
              </div>
              <Link className="link" to={`/post/${item.id}`}>
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

export default Jewelery;
