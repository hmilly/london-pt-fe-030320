import React from "react";
import Item from "./Item/Item"

const Cart = ({ cart, updateItem }) => {

  return (
    <ul>
      <h3>Cart</h3>
      {cart.map(item => (
        <Item key={item.id} item={item} updateItem={updateItem}/>
      ))}
    </ul>
)
};

export default Cart;
