import { createContext, useState } from "react"
import menuItems from "../menuItems";

// Keeps track of states and functions to be accessed all over the app
const CartContext = createContext(null)

// Sets the initial value of each item to 0 before they are added into the cart. This funtio will be used as the initial value of the state of the cart.
const getDefaultCartValue = () => {
    let cart = {}

    for(let i = 1; i < menuItems.length + 1; i++) {
        cart[i] = 0;
    } 
    return cart;
};

function CartContextProvider(props) {
    // This component will define all the states of the app and functions that will be used. It will then pass it all to the Provider
    const [cartItem, setCartItem] = useState(getDefaultCartValue());

    const addToCart = (menuId) => {
      setCartItem((prev) => ({...prev, [menuId]: prev[menuId] + 1}))
    }

    const removeFromCart = (menuId) => {
      setCartItem((prev) => ({...prev, [menuId]: prev[menuId] - 1}))
    }

    // Passing our values out as state
    const contextValue = { cartItem, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
  )
}
export {CartContextProvider, CartContext}