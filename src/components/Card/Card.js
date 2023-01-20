import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Card() {
  const id = useParams().id || "";
  const [element, setElement] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((result) => setElement(result));
  }, []);
  console.log(element);
  return <div>{element.title}</div>;
}

export default Card;
