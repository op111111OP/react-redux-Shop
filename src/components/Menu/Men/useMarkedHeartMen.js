import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
// підключення батківські
// Men(mens[дає])
// сердечка
function useMarkedHeartMen(mens) {
  const [clickedIdsMen, setClickedIdsMen] = useLocalStorage("clickedIdMen", []);
  function onMarkedHeartIdsMen(newClickedIds) {
    setClickedIdsMen(newClickedIds);
  }

  const refs = Array(mens.length)
    .fill(null)
    .map(() => React.createRef());

  useEffect(() => {
    if (refs.length === mens.length) {
      clickedIdsMen.forEach((id) => {
        const ref = refs[id - 1]?.current;
        if (ref) {
          ref.className = "icon_block";
        }
      });
    }
  }, [clickedIdsMen, refs]);
  const handleClickMen = (id) => {
    setClickedIdsMen([...clickedIdsMen, id]);
  };

  return {
    clickedIdsMen,
    handleClickMen,
    refs,
    onMarkedHeartIdsMen,
  };
}

export { useMarkedHeartMen };
