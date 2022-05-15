import React, { useState, useRef } from "react";
import DragNDropWindow from "../components/DragNDropWindow";
import LeftPanel from "../components/LeftPanel";

function Screen3() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <LeftPanel />
        <DragNDropWindow />
      </div>
    </>
  );
}

export default Screen3;
