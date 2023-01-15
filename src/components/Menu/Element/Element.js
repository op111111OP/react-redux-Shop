import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Element(e) {
  const id = useParams().id || "";
  const [s, setS] = useState(e);

  return;
}

export default Element;
