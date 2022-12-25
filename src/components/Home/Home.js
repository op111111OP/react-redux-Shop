import React from "react";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import { Button } from "react-bootstrap";
import {
  ArrowRight,
  Crop,
  Icon0Circle,
  Icon0CircleFill,
  Person,
  PersonBadgeFill,
  PersonFill,
  UsbDrive,
} from "react-bootstrap-icons";
import "./Home.css";
import { fetcReg } from "../actions/auth.action";
import Context from "../../common/context";
import { useContext } from "react";
import { store } from "..";

// App
function Home() {
  //   const URL = process.env.REACT_APP_URL;
  const { post, item } = useContext(Context);
  const [items, setItems] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setItems(item);
    async function getPosts(params) {
      const result = await store.dispatch(fetcReg(post));
      // console.log(result.payload);
    }
    getPosts();
  }, [item]);

  return (
    <Layout>

      <Person color="red" size={96} />
      <ul>
        {items.map((item) => (
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
    </Layout>
  );
}
export default Home;
