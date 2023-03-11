import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
// підключення батківські
// Jewelery(jewelery[дає])
// сердечка
function useMarkedHeartJewelery(jewelery) {
  const [clickedIdsJewelery, setClickedIdsJewelery] = useLocalStorage(
    "clickedIdJewelery",
    []
  );
  function onMarkedHeartIdsJewelery(newClickedIds) {
    setClickedIdsJewelery(newClickedIds);
  }

  const refs = Array(jewelery.length)
    .fill(null)
    .map(() => React.createRef());

  useEffect(() => {
    if (refs.length === jewelery.length) {
      clickedIdsJewelery.forEach((id) => {
        const ref = refs[id - 1]?.current;
        if (ref) {
          ref.className = "icon_block";
        }
      });
    }
  }, [clickedIdsJewelery, refs, jewelery.length]);
  const handleClickJewelery = (id) => {
    setClickedIdsJewelery([...clickedIdsJewelery, id]);
  };

  return {
    clickedIdsJewelery,
    handleClickJewelery,
    refs,
    onMarkedHeartIdsJewelery,
  };
}

export { useMarkedHeartJewelery };
