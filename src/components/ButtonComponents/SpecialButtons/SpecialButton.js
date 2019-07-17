import React from "react";

const SpecialButton = props => {
  console.log("special props", props);
  return <button>{props.val}</button>;
};

export default SpecialButton;
