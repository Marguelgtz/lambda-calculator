import React from "react";

// Math.abs(num) => Always positive
// -Math.abs(num) => Always negative

const SpecialButton = props => {
  return (
    <button
      onClick={() => {
        switch (props.val) {
          case "C":
            return props.set(0);
          case "+/-":
            const posNeg = props.display * -1;
            return props.set(posNeg);
          case "%":
            return props.set(`${props.display}${props.val}`);
        }
      }}
    >
      {props.val}
    </button>
  );
};

export default SpecialButton;
