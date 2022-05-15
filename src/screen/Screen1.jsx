import React from "react";
import Button from "../components/Button";
import Chair from "../images/Chair.png";
import "./Screen1.css";
import { useNavigate } from "react-router-dom";

function Screen1() {
  const navigate = useNavigate();
  const onClickHandler = () => navigate(`/screen2`);
  return (
    <div className="screen1">
      <h1 className="title">Welcome!!!</h1>
      <img src={Chair} alt="chair" className="landingImg" />
      <button className="button" onClick={onClickHandler}>
        Start
      </button>
    </div>
  );
}

export default Screen1;
