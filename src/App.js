import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./common/context";
import Home from "./components/Home/Home";
import { Len } from "./components/language/Len";
import { LenCategories } from "./components/language/LenCategories";
import { LenElectronicsTitl } from "./components/language/LenElectronicsTitl";
import { LenElectronicsDes } from "./components/language/LenElectronicsDes";
import Defense from "./components/Defense/Defense";
import Basket from "./components/Basket/Basket";
import Electronics from "./components/Menu/Electronics/Electronics";
import Jewelery from "./components/Menu/Jewelery/Jewelery";
import Men from "./components/Menu/Men/Men";
import Women from "./components/Menu/Women/Women";
import Card from "./components/Card/Card";
import { useLocalStorage } from "react-use";
import { fetchData } from "./fetchData";
import Notfound from "./components/Notfound/Notfound";

function App() {
  const [defenseCard, setDefenseCard] = useLocalStorage("defenseCard", []);
  const [idElem, setIdElem] = useLocalStorage("idElem", []);
  const [categories, setCategories] = useLocalStorage("categories");
  const [item, setItem] = useState([]);
  const [know, setKnow] = useLocalStorage("know", true);
  const [colorMenu, setColorMenu] = useState(true);
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);
  const [carousels1, setCarousels1] = useState("");
  const [carousels2, setCarousels2] = useState("");
  const [carousels3, setCarousels3] = useState("");
  const [onCard, setOnCard] = useLocalStorage("onCard", []);
  const [number, setNumber] = useLocalStorage("number", 0);
  const [id, setId] = useLocalStorage("id", []);

  useEffect(() => {
    fetchData(
      setCategories,
      setElectronics,
      setJewelery,
      setMens,
      setWomens,
      setItem,
      setCarousels1,
      setCarousels2,
      setCarousels3
    );
  }, []);

  function returs(len) {
    setKnow(len);
  }
  function classSet(classSection) {
    setColorMenu(classSection);
  }
  function onYas(e) {
    if (id.indexOf(e) === -1) {
      setNumber(number + 1);
    }
  }
  function onNo() {
    setNumber(number - 1);
  }
  //   +++
  function addElement(res, e) {
    if (id.indexOf(e) === -1) {
      setId([...id, e]);
    }
    if (id.indexOf(e) === -1) {
      setOnCard([...onCard, { ...res, amount: res.price }]);
    }
  }
  //   ===
  function addIcon(res, e) {
    if (idElem.indexOf(e) === -1) {
      setIdElem([...idElem, e]);
      setDefenseCard([...defenseCard, res]);
    }
  }
  //   ----
  function cardDefense(e, e1) {
    setDefenseCard(e);
    setIdElem(e1);
  }

  //   --

  function card(e, e1) {
    setOnCard(e);
    setId(e1);
  }

  const leng = Len(know);
  const lenCategories = LenCategories();
  const lenElectronicsTitl = LenElectronicsTitl();
  const lenElectronicsDes = LenElectronicsDes();
  return (
    <ContextProvider
      value={{
        item,
        leng,
        returs,
        addElement,
        onYas,
        categories,
        lenCategories,
        lenElectronicsTitl,
        lenElectronicsDes,
        know,
        colorMenu,
        classSet,
        electronics,
        jewelery,
        mens,
        womens,
        carousels1,
        carousels2,
        carousels3,
        number,
        onCard,
        addIcon,
        defenseCard,
        id,
        card,
        onNo,
        idElem,
        cardDefense,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/0m" element={<Electronics />} />
          <Route path="/1m" element={<Jewelery />} />
          <Route path="/2m" element={<Men />} />
          <Route path="/3m" element={<Women />} />
          <Route path="/post/:id" element={<Card />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
