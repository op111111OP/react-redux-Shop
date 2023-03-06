import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
// підключення батківські
//  DefenseYas(eId(number)) Home(clickedIds[дає], onMarkedHeartIds[прий.]) Electronics(clickedIdsElectronics[дає], onMarkedHeartIdsElectronics[прий.]) Men(clickedIdsMen[дає], onMarkedHeartIdsMen[прий.])
function MarkedHeart({
  eId,
  clickedIdsMen,
  clickedIds,
  onMarkedHeartIds,
  onMarkedHeartIdsElectronics,
  clickedIdsElectronics,
  onMarkedHeartIdsMen,
}) {
  const [onTrue, setOnTrue] = useState(true);
  const [clickedIds1, setClickedIds1] = useLocalStorage(
    "clickedIds1",
    clickedIds
  );
  const [twoTrue, setTwoTrue] = useState(true);
  const [clickedIdsElectronics1, setcliCkedIdsElectronics1] = useLocalStorage(
    "clickedIdsElectronics1",
    clickedIdsElectronics
  );
  const [threeTrue, setThreeTrue] = useState(true);
  const [clickedIdsMen1, setcliCkedIdsMen1] = useLocalStorage(
    "clickedIdsMen1",
    clickedIdsMen
  );
  useEffect(() => {
    if (clickedIds !== undefined) {
      setClickedIds1(clickedIds);
    }
    if (clickedIdsElectronics !== undefined) {
      setcliCkedIdsElectronics1(clickedIdsElectronics);
    }
    if (clickedIdsMen !== undefined) {
      setcliCkedIdsMen1(clickedIdsMen);
    }
  }, [clickedIds, clickedIdsElectronics, clickedIdsMen]);

  useEffect(() => {
    if (eId !== "" && eId !== undefined) {
      const index = clickedIds1.indexOf(Number(eId));
      if (index !== -1) {
        const updatedIds = [...clickedIds1];
        updatedIds.splice(index, 1);
        setClickedIds1(updatedIds);
        setOnTrue((a) => !a);
      }
      const indexElectronics = clickedIdsElectronics1.indexOf(Number(eId));
      if (indexElectronics !== -1) {
        const updatedIds = [...clickedIdsElectronics1];
        updatedIds.splice(indexElectronics, 1);
        setcliCkedIdsElectronics1(updatedIds);
        setTwoTrue((a) => !a);
      }
      const indexMen = clickedIdsMen1.indexOf(Number(eId));
      if (indexMen !== -1) {
        const updatedIds = [...clickedIdsMen1];
        updatedIds.splice(indexMen, 1);
        setcliCkedIdsMen1(updatedIds);
        setThreeTrue((a) => !a);
      }
    }
  }, [clickedIds1, clickedIdsElectronics1, clickedIdsMen1, eId]);

  useEffect(() => {
    if (clickedIds !== undefined && clickedIds1 !== clickedIds) {
      onMarkedHeartIds(clickedIds1);
    }
    if (
      clickedIdsElectronics !== undefined &&
      clickedIdsElectronics1 !== clickedIdsElectronics
    ) {
      onMarkedHeartIdsElectronics(clickedIdsElectronics1);
    }
    if (clickedIdsMen !== undefined && clickedIdsMen1 !== clickedIdsMen) {
      onMarkedHeartIdsMen(clickedIdsMen1);
    }
  }, [onTrue, twoTrue, threeTrue]);

  return null;
}
export default MarkedHeart;
