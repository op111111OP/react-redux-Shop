import React from "react";
import { useParams } from "react-router-dom";

function Element() {
  const id = useParams().id || "";
  console.log(id);
  return <div>Element</div>;
}

export default Element;
