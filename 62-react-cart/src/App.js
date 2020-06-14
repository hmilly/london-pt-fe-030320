import React, { useState } from "react";
import "./App.css";

import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

const initialStock = [
  {
    id: 1,
    name: "butter",
    quantity: 20,
  },
  {
    id: 2,
    name: "Apples",
    quantity: 5,
  },
  {
    id: 3,
    name: "Salmon",
    quantity: 13,
  },
  {
    id: 4,
    name: "Soap",
    quantity: 2,
  },
];

const App = () => {
  const [stock, setStock] = useState([...initialStock]);
  const [cart, setCart] = useState([]);

  const addToCart = (selectedItem, selectedQuantity) => {
    const ifFound = cart.find(items =>
      selectedItem.id === items.id)

    if (ifFound) {
      ifFound.quantity += selectedQuantity
      return setCart([...cart])
    } else {
      setCart([...cart, {
        id: selectedItem.id,
        name: selectedItem.name,
        quantity: selectedQuantity
      }])
    }

    stock.map(item => {
      if (item.name === selectedItem.name) {
        item.quantity = selectedItem.quantity - selectedQuantity
      }
    })
    setStock([...stock])
  }

  const updateItem = (selectedItem, selectedQuantity) => {

    let ifFound = cart.find(items =>
      selectedItem.id === items.id)


    if (ifFound && ifFound.quantity !== 0) {
      ifFound.quantity -= selectedQuantity
      setCart([...cart])
    }

    if (ifFound && ifFound.quantity === 0) {
      let i = cart.indexOf(ifFound)
      cart.splice(i, i + 1)
      setCart([...cart])
      console.log(cart)
    }

    stock.map(item => {
      if (item.name === selectedItem.name)
        item.quantity += selectedQuantity
    })
    setStock([...stock])
  }

  return (
    <div className="app">
      <Store stock={stock} addToCart={addToCart} />
      <Cart cart={cart} updateItem={updateItem} />
    </div>)
};

export default App;