import React, { useState } from "react";

const Counter = () => {
  let [counter, setcounter] = useState(0);
  const inc = () => setcounter(counter++);
  const dec = () => setcounter(counter--);

  return (
    <div className="counter">
      <h1>{counter}</h1>
      <div className="btndiv">
        <button className="dec" onClick={dec}>
          -
        </button>
        <button className="inc" onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
