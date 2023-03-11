import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
// підключення батківські
// Women(womens[дає])
// сердечка
function useMarkedHeartWomen(womens) {
  const [clickedIdsWomen, setClickedIdsWomen] = useLocalStorage(
    "clickedIdWomen",
    []
  );
  function onMarkedHeartIdsWomen(newClickedIds) {
    setClickedIdsWomen(newClickedIds);
  }

  const refs = Array(womens.length)
    .fill(null)
    .map(() => React.createRef());

  useEffect(() => {
    if (refs.length === womens.length) {
      clickedIdsWomen.forEach((id) => {
        const ref = refs[id - 1]?.current;
        if (ref) {
          ref.className = "icon_block";
        }
      });
    }
  }, [clickedIdsWomen, refs, womens.length]);
  const handleClickWomen = (id) => {
    setClickedIdsWomen([...clickedIdsWomen, id]);
  };

  return {
    clickedIdsWomen,
    handleClickWomen,
    refs,
    onMarkedHeartIdsWomen,
  };
}

export { useMarkedHeartWomen };
