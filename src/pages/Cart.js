import { useContext } from 'react';
import Layout from '../components/Layout';
import CartContext from '../context/cart-context';

function Cart () {

    const ctx = useContext(CartContext);

    const cartItems = ctx.cart.map((item, index)=> (
        <div key={index} style={{border: "1px solid red", margin: "10px"}}>
            {item.name}, {item.price}
        </div>
    ))

    return (
        <Layout>
            <h1>Cart works!</h1>
            <h4>The cart sum is: {ctx.sum}</h4>
            {cartItems}
        </Layout>
    );
}

export default Cart;