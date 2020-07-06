import React from "react";
import Item from "./Item/Item"

const Store = ({ stock, addToCart } ) => {
  return (
    <ul>
      <h3>Store</h3>
      {stock.map(item => (
        <Item key={item.id} item={item} addToCart={addToCart}/>
      ))}
    </ul>
  )
};

export default Store;
