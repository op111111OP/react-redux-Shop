import React from "react";
import Layout from "../../Layout/Layout";
import Context from "../../../common/context";
import { useContext } from "react";

function Electronics() {
  const { know, leng, colorMenu, electronics } = useContext(Context);
  return (
    <Layout>
      <div>Electronics</div>
    </Layout>
  );
}

export default Electronics;
