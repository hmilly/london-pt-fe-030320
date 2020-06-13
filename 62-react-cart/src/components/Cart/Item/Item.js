import React, {useState} from "react";

// cart / item folder


const Item = ({item, updateItem}) => {

const [inputValue, setInputValue] = useState("0");

const handleChange = (e) => {
  const currentVal = e.target.value
  setInputValue(currentVal)
}

const setval = (e) => {
  e.preventDefault();

  if (inputValue !== 0) { 
    updateItem(item, parseInt(inputValue))
    setInputValue("0")
  } 
}


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
          onChange={handleChange}
        ></input>
        <button className="delete" onClick={setval}>Delete from Cart</button>
      </form>
    </li>
  )
};

export default Item;
