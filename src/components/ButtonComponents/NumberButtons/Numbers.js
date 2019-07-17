import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file

import { numbers } from "../../../data";

const Numbers = props => {
  // STEP 2 - add the imported data to state
  console.log(props);
  const [value, setValue] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {value.map((n, i) => (
        <NumberButton
          key={i}
          number={n}
          display={props.display}
          set={props.set}
        />
      ))}
    </div>
  );
};

export default Numbers;
