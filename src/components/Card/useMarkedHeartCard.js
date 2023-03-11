import { useEffect, useState } from "react";
// підключення батківські
// Card(id, clickedIds)
// сердечка
function useMarkedHeartCard(id, clickedIds) {
  const [handleClickCard, setHandleClickCard] = useState("icon_none");
  // ...
  useEffect(() => {
    if (clickedIds.indexOf(Number(id)) !== -1) {
      setHandleClickCard(" icon_block");
    }
  }, [clickedIds, id]);

  return {
    setHandleClickCard,
    handleClickCard,
  };
}

export { useMarkedHeartCard };
