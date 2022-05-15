import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem } from "@mui/material";
import CardView from "../components/CardView";
import { Data } from "../data/partsInfo";
import "./Screen2.css";

function Screen2() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const handler = (val) => () => {
    setSelectedItems([...selectedItems, val]);
  };

  const onClickHandler = () => navigate(`/screen3`);
  return (
    <div className="container">
      <h1>Choose your parts!!!</h1>
      <h1>Selected Parts</h1>
      <List className="scrollbar">
        {Data &&
          Data.map((data) => {
            return (
              <ListItem key={data.id}>
                <CardView
                  name={data.name}
                  imgSrc={data.src}
                  handleClick={handler}
                />
              </ListItem>
            );
          })}
      </List>

      {selectedItems.map((data) => {
        return <h3 key={data}>{data}</h3>;
      })}
      <div>
        <button className="button" onClick={onClickHandler}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Screen2;
