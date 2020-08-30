import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />

      <img
        className="nav__avatar"
        src="https://occ-0-2250-55.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAAFJEwjyRPHh82xsHWjg7_snFujouP1Qf0hSeayTP98rxPJQKPInwcAm-72OoPsjg_xj3Y4HkM0hJCtJe2qqTWaPBUJA.png?r=a41"
        alt="logo"
      />
    </div>
  );
}

export default Nav;
