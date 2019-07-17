import React from "react";

const NumberButton = props => {
  console.log("FIRE");
  console.log("props :", props.number);
  return <button>{props.number}</button>;
};

export default NumberButton;
