import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";
// підключення батківські
// Electronics(electronics[дає])
// сердечка
function useMarkedHeartElectronics(electronics) {
  const [clickedIdsElectronics, setClickedIdsElectronics] = useLocalStorage(
    "clickedIdElectronics",
    []
  );
  function onMarkedHeartIdsElectronics(newClickedIds) {
    setClickedIdsElectronics(newClickedIds);
  }

  const refs = Array(electronics.length)
    .fill(null)
    .map(() => React.createRef());

  useEffect(() => {
    if (refs.length === electronics.length) {
      clickedIdsElectronics.forEach((id) => {
        const ref = refs[id - 1]?.current;
        if (ref) {
          ref.className = "icon_block";
        }
      });
    }
  }, [clickedIdsElectronics, refs, electronics.length]);
  const handleClickElectronics = (id) => {
    setClickedIdsElectronics([...clickedIdsElectronics, id]);
  };

  return {
    clickedIdsElectronics,
    handleClickElectronics,
    refs,
    onMarkedHeartIdsElectronics,
  };
}

export { useMarkedHeartElectronics };
