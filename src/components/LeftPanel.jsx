import React from "react";
import { Data } from "../data/partsInfo";

function LeftPanel() {
  const dragStart = (e) => {
    const target = e.target.id;
    e.dataTransfer.setData("text/plain", target);
    var img = new Image();
    img.src = "../images/Chair.png";
    e.dataTransfer.setDragImage(img, 10, 10);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  const getCoOrdinate = (e) => {
    const target = e.target.id;
    const card = document.getElementById(target);

    card.style.position = "absolute";
    card.style.left = e.clientX - card.clientWidth / 2 + "px";
    card.style.top = e.clientY - card.clientHeight / 2 + "px";
  };
  return (
    <div>
      <h1>Items</h1>
      {Data.map((data) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h5>{data.name}</h5>
            <img
              src={data.src}
              draggable
              id={`'img': ${data.id}`}
              onDragStart={dragStart}
              onDragOver={dragOver}
              onDragOverCapture={getCoOrdinate}
            />
          </div>
        );
      })}
    </div>
  );
}

export default LeftPanel;
