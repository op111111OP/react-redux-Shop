import React, { useState } from "react";
import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";
import "./Layout.css";
import Footer from "./Footer/Footer";
import Header from "./Header";

// Home

function Layout({ children }) {
  const [classSection, setSection] = useState(true);
  function section(e) {
    setSection(e);
  }
  return (
    <div className="wrapper">
      <Header section={section} />
      <section className={classSection ? "light" : "dark"}>
        <div className="container">{children}</div>
      </section>
      <div className="fixed_box">
        <a href="#top" title="Вгору" className="fixed_a">
          <ArrowUpCircleFill
            color={classSection ? "rgb(39, 38, 38)" : "rgb(222, 222, 222)"}
            size="40"
          />
        </a>
        <a href="#footer" title="Вгору" className="fixed_a">
          <ArrowDownCircleFill
            color={classSection ? "rgb(39, 38, 38)" : "rgb(222, 222, 222)"}
            size="40"
          />
        </a>
      </div>
      <footer id="footer" className="dark-footer">
        <Footer />
      </footer>
    </div>
  );
}
export default Layout;
