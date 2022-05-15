import React from "react";

function DragNDropWindow() {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver1 = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id="parent"
      style={{
        border: "1px solid",
        width: "400px",
        height: "400px",
        margin: "10%",
      }}
      onDrop={drop}
      onDragOver={dragOver1}
    ></div>
  );
}

export default DragNDropWindow;
