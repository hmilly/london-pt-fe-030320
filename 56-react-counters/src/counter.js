import React, { useState } from "react";

const Counter = () => {
  let [counter, setcounter] = useState(0);
  const inc = () => setcounter(counter+1);
  const dec = () => setcounter(counter-1);

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <div className="btndiv">
        <button className="decrement" onClick={dec}>
          -
        </button>
        <button className="increment" onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
