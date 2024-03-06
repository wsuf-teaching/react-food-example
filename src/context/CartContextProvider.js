import { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    cart: [],
    sum: 0
};

const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD": 
            return {
                ...state,
                cart: [...state.cart, action.item],
                sum: state.sum + action.item.price
            };
        case "CLEAR": 
            return defaultCartState;
        default:
            return state;
    }
};

const CartContextProvider = props => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

    const addToCartHandler = (newElement) => {
        dispatch({type:"ADD", item: newElement});
    };

    const clearCartHandler = () => {
        dispatch({type:"CLEAR"});
    };
    
    const cartContext = {
        cart: cartState.cart,
        sum: cartState.sum,
        addToCart: addToCartHandler,
        clearCart: clearCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

};


export default CartContextProvider;


// const CartContextProvider = props => {

//     const [cartState, setCartState] = useState([]);
//     const [cartSum, setCartSum] = useState(0);

//     const [bigBadState, setBigBadState] = useState({cart:[],sum:0})

//     const addToCartHandler = (newElement) => {
//         setCartState((cartState)=>[...cartState, newElement]);
//         setCartSum(cartState.reduce((sum,item) => sum + item.price, 0)); // calculate the sum of the item prices
//     }

//     const clearCartHandler = () => {
//         setCartState([]);
//         setCartSum(0);
//     }

//     const cartContext = {
//         cart: cartState,
//         sum: cartSum,
//         addToCart: addToCartHandler,
//         clearCart: clearCartHandler
//     };

//     return (
//         <CartContext.Provider value={cartContext}>
//             {props.children}
//         </CartContext.Provider>
//     );
// };

// export default CartContextProvider;

