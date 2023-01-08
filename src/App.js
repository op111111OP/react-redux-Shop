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
import Profile from "./components/Profile/Profile";
import Electronics from "./components/Menu/Electronics/Electronics";
import Jewelery from "./components/Menu/Jewelery/Jewelery";
import Men from "./components/Menu/Men/Men";
import Women from "./components/Menu/Women/Women";
import Element from "./components/Menu/Element/Element";

function App() {
  const [item, setItem] = useState([]);
  const [categories, setCategories] = useState([]);
  const [know, setKnow] = useState(true);
  const [colorMenu, setColorMenu] = useState(true);
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);
  const [carousels1, setCarousels1] = useState("");
  const [carousels2, setCarousels2] = useState("");
  const [carousels3, setCarousels3] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((result) => setItem(result));
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((result) => setCategories(result));
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((result) => setElectronics(result));
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((result) => setJewelery(result));
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => res.json())
      .then((result) => setMens(result));
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((result) => setWomens(result));
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((result) => setCarousels1(result));
    fetch("https://fakestoreapi.com/products/2")
      .then((res) => res.json())
      .then((result) => setCarousels2(result));
    fetch("https://fakestoreapi.com/products/3")
      .then((res) => res.json())
      .then((result) => setCarousels3(result));
  }, []);

  function returs(len) {
    setKnow(len);
  }
  function classSet(classSection) {
    setColorMenu(classSection);
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
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/0m" element={<Electronics />} />
          <Route path="/1m" element={<Jewelery />} />
          <Route path="/2m" element={<Men />} />
          <Route path="/3m" element={<Women />} />
          <Route path="/post/:id" element={<Element />} />
          {/* <Route path="*" element={<Notfound />} /> */}
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
