import React from "react";
import Card from "@mui/material/Card";
import "./CardView.css";
function CardView({ name, imgSrc, handleClick }) {
  return (
    <Card className="card" onClick={handleClick(name)}>
      <div className="imgContainer">
        <img src={imgSrc} className="partImg" />
      </div>
      <h2>{name}</h2>
    </Card>
  );
}

export default CardView;
