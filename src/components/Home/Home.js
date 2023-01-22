import React from "react";
import Layout from "../Layout/Layout";
import { Button } from "react-bootstrap";
import "./Home.css";
import Carousels from "./Carousels/Carousels";
import Context from "../../common/context";
import { useContext } from "react";
// import { store } from "..";

// App
function Home() {
  const { item } = useContext(Context);

  return (
    <Layout>
      <div className="home">
        <Carousels />

        <ul>
          {item.map((item) => (
            <li key={item.id}>
              <div> {item.category}</div>
              <div>{item.description}</div>
              <img src={item.image} width="300" height="250" />
              <div> {item.rating.count}</div>
              <div>{item.rating.rate}</div>
              <div> {item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
export default Home;
