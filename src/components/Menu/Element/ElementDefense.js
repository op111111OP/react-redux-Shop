import { useState, useContext, useEffect } from "react";
import Context from "../../../common/context";
// общий
function ElementDefense(e, onTrueOne) {
  const { addIcon } = useContext(Context);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + e)
      .then((res) => res.json())
      .then((result) => addIcon(result, e));
  }, [onTrueOne]);

  return;
}

export default ElementDefense;
