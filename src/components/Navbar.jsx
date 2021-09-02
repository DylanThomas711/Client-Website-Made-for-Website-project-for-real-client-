import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pages, contact } from "../utils/consts";
import logo from "./RV-AC.png"
import {FaBars} from "react-icons/fa";

const Navbar = () => {
  const [linksShowing, setLinksShowing] = useState(false);
  const windowCheck = () => {
    if (window.innerWidth < 770) {
      setLinksShowing(false);
    }else if (window.innerWidth >= 770) {
      setLinksShowing(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => windowCheck());
    windowCheck();
  }, []);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-head">
          <div className="phoneLogo">
            <h1>Clanys</h1>
            <h2>RV AC</h2>
          </div>
            <img src={logo} className="logo"/>
          <button className="hamburger" onClick={() => setLinksShowing(!linksShowing)}>
            <FaBars/>
          </button>
        </div>
        <div className={`pageDiv ${linksShowing && "showing"}`}>
          <ul className="pages">
            {pages
              .filter((pageLink) => pageLink.text !== "Error")
              .map((pageLink) => {
                return (
                  <li key={pageLink.id}>
                    <Link to={pageLink.path}>{pageLink.text}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
