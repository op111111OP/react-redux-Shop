import { useState, useContext, useEffect } from "react";
import Context from "../../../common/context";

function Element({ posts, onTrue }) {
  const { anyApp, addElement } = useContext(Context);
  const [s, setS] = useState({});
  const [sTrue, setSTrue] = useState(false);
  //   =====
  //   const [onTrue, setOnTrue] = useState(false);
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
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + `${posts}`)
      .then((res) => res.json())
      .then((result) => addElement(result, `${posts}`));
    fetch("https://fakestoreapi.com/products/" + `${posts}`)
      .then((res) => res.json())
      .then((result) => setAmount(result.price));
    setEe(`${posts}`);
  }, [onTrue]);

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
  // ===
  useEffect(() => {
    if (s != {} && fourTrue) {
      setS({ ...app });
      setSTrue((a) => !a);
    }
  }, [fourTrue]);
  useEffect(() => {
    if (s != {}) {
      anyApp(s);
    }
  }, [sTrue]);

  return;
}

export default Element;
