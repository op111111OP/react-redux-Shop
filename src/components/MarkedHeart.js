import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
// підключення батківські
//  DefenseYas(eId(number)) Home(clickedIds[дає], onMarkedHeartIds[прий.])
function MarkedHeart({ eId, clickedIds, onMarkedHeartIds }) {
  const [onTrue, setOnTrue] = useState(true);
  const [clickedIds1, setClickedIds1] = useLocalStorage(
    "clickedIds1",
    clickedIds
  );

  useEffect(() => {
    if (clickedIds !== undefined) {
      setClickedIds1(clickedIds);
    }
  }, [clickedIds]);
  useEffect(() => {
    if (eId !== "" && eId !== undefined) {
      const index = clickedIds1.indexOf(Number(eId));
      if (index !== -1) {
        const updatedIds = [...clickedIds1];
        updatedIds.splice(index, 1);
        setClickedIds1(updatedIds);
        setOnTrue((a) => !a);
      }
    }
  }, [clickedIds1, eId]);

  useEffect(() => {
    if (clickedIds !== undefined && clickedIds1 !== clickedIds) {
      onMarkedHeartIds(clickedIds1);
    }
  }, [onTrue]);

  return null;
}
export default MarkedHeart;
