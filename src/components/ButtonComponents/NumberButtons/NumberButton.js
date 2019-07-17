import React from "react";

const NumberButton = props => {
  return (
    <button
      onClick={() =>
        props.set(
          props.display === 0 ? props.number : `${props.display}${props.number}`
        )
      }
    >
      {props.number}
    </button>
  );
};

export default NumberButton;
