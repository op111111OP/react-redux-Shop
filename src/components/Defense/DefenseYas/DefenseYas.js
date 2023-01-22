import React, { useContext } from "react";
import Context from "../../../common/context";

// App
function DefenseYas() {
  const { defenseCard } = useContext(Context);

  console.log(defenseCard);
  return <div>dddddddddddd</div>;
}

export default DefenseYas;
