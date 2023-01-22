import React, { useContext } from "react";
import Context from "../../common/context";
import Layout from "../Layout/Layout";
import DefenseYas from "./DefenseYas/DefenseYas";
import DefenseNo from "./DefenseNo/DefenseNo";

// App
function Defense() {
  const { defenseCard } = useContext(Context);

  return <Layout>{defenseCard === "" ? <DefenseNo /> : <DefenseYas />}</Layout>;
}

export default Defense;
