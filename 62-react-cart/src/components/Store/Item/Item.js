import React, { useState, useEffect } from "react";

// store / item folder

const Item = ({ item, addToCart }) => {

  const [inputValue, setInputValue] = useState("0");
  const [disabled, setDisabled] = useState(false)

  const handleChange = (e) => {
    const currentVal = e.target.value
    setInputValue(currentVal)
  }

  const setval = (e) => {
    e.preventDefault();
    if (inputValue !== "0") {
      addToCart(item, parseInt(inputValue))
      setInputValue("0")
    }
  }

  useEffect(() =>
    (item.quantity === 0) ? setDisabled(true)
      : setDisabled(false), [item.quantity])

  const msg =
    (disabled) ? <p className="label">Sorry, Item out of stock!</p> : ""

  return (
    <li>
      <p>{item.name}</p>
      <form>
        <input
          type="number"
          name={item.name}
          min="0"
          max={item.quantity}
          value={inputValue}
          disabled={disabled}
          onChange={handleChange}
        ></input>
        <button className="update" onClick={setval}>Add to Cart</button>
        {msg}
      </form>
    </li>
  )
};

export default Item;
