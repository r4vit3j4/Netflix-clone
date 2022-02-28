import React, { useEffect, useState } from "react";
import "./screens/HomeScreen";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="navbar__contents">
        <img
          onClick={() => history("/")}
          className="navbar__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="logo"
        />
        <img
          onClick={() => history("/Profile")}
          className="navbar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
