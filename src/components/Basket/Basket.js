import React from "react";
import { useContext } from "react";
import Context from "../../common/context";
import Layout from "../Layout/Layout";
import BasketYas from "./BasketYas/BasketYas";
import BasketNo from "./BasketNo/BasketNo";
// App
function Basket() {
  const { onCard } = useContext(Context);
  return <Layout>{onCard.length === 0 ? <BasketNo /> : <BasketYas />}</Layout>;
}

export default Basket;
