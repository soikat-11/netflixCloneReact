import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false); // * manage animation for netflix header
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // * every time we scroll, we listen to the event and trigger the above function
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    // * clean-up function below
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  // * only display nav__black when show is true
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
          alt="logo"
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://freepngimg.com/thumb/deadpool/4-2-deadpool-logo-png.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
