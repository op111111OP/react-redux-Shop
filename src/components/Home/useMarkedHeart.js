import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
// підключення батківські
// Home(item[дає])
function useMarkedHeart(item) {
  const [clickedIds, setClickedIds] = useLocalStorage("clickedIds", []);
  function onMarkedHeartIds(newClickedIds) {
    setClickedIds(newClickedIds);
  }
  const refs = Array(item.length)
    .fill(null)
    .map(() => React.createRef());

  useEffect(() => {
    if (item !== "") {
      clickedIds.forEach((id) => {
        const ref = refs[id - 1]?.current;
        if (ref) {
          ref.className = "icon_block";
        }
      });
    }
  }, [clickedIds, refs]);

  const handleClick = (id) => {
    setClickedIds([...clickedIds, id]);
  };

  return { clickedIds, handleClick, refs, onMarkedHeartIds };
}

export default useMarkedHeart;
