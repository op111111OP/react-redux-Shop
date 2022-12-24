import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./common/context";
import Home from "./components/Home/Home";
import { Len } from "./components/language/Len";
import Defense from "./components/Defense/Defense";
import Basket from "./components/Basket/Basket";
import Profile from "./components/Profile/Profile";

// import Posts from "./components/Posts/Posts";
// import Post from "./components/Post/Post";
// import Notfound from "./components/Notfound/Notfound";

function App() {
  const post = 222222;
  const [item, setItems] = useState([]);
  const [know, setIKnow] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);

  function returs(len) {
    setIKnow(len);
  }
  const leng = Len(know);
  return (
    <ContextProvider value={{ post, item, leng, returs }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/post/:id" element={<Post />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Notfound />} /> */}
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
