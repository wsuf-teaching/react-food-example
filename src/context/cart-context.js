import React from "react";

const CartContext = React.createContext({
    cart: [],
    sum: 0,
    addToCart: (newElement) => {},
    clearCart: () => {}
});

export default CartContext;