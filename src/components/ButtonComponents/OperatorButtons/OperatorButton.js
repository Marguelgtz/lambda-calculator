import React from "react";

const OperatorButton = props => {
  return (
    <button
      onClick={() => {
        const rigth = props.display.substring(props.display.indexOf("%") + 1);

        const left = props.display.substring(0, props.display.indexOf("%"));
        console.log("left", left, "rigth", rigth);
        for (const k in props.ops) {
          props.set(
            props.ops.char === "="
              ? props.display.includes("%")
                ? (left * rigth) / 100
                : eval(props.display)
              : `${props.display}${props.ops.value}`
          );
        }
      }}
    >
      {props.ops.char}
    </button>
  );
};

export default OperatorButton;
