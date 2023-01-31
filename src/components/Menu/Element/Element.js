import { useContext, useEffect } from "react";
import Context from "../../../common/context";

function Element({ posts, onTrue }) {
  const { addElement } = useContext(Context);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + `${posts}`)
      .then((res) => res.json())
      .then((result) => addElement(result, `${posts}`));
  }, [onTrue]);
  return;
}

export default Element;
