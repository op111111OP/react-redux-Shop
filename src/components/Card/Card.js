import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../Layout/Layout";

function Card() {
  const id = useParams().id || "";
  const [element, setElement] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((result) => setElement(result));
  }, [id]);
  console.log(element);
  return (
    <Layout>
      <div>{element.title}</div>
    </Layout>
  );
}

export default Card;
