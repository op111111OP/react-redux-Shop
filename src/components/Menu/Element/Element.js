import React from "react";
import { useState, useContext, useEffect } from "react";
import Context from "../../../common/context";

function Element({ app }) {
  const { anyApp } = useContext(Context);
  const [s, setS] = useState({});
  const [sTrue, setSTrue] = useState(false);
  useEffect(() => {
    if (s != {}) {
      setS({ ...app });
      setSTrue((a) => !a);
    }
  }, [app]);
  useEffect(() => {
    if (s != {}) {
      anyApp(s);
    }
  }, [sTrue]);

  return;
}

export default Element;
