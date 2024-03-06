import { useContext, useState } from 'react';
import classes from './Food.module.css';
import CartContext from '../context/cart-context';

function Food(props) {   // display component

    const [food, setFood] = useState(props.data);

    const cartCtx = useContext(CartContext);

    // let sale;
    // if (food.price < 10 ) {
    //     sale = <div id="sale">SALE!</div>;
    // }

    const addToCartHandler = (event) => {
        cartCtx.addToCart({name: food.name, price: food.price});
    }

    return (
        <div className={`${classes.food}`}>
            <h2 className={classes.name}>{food.name.toUpperCase()}</h2>
            <img src={food.url} className={classes.image}></img>
            <p>{food.description}</p>
            { food.price < 10 && 
                <div className={classes.sale}>SALE!</div> 
            }
            <h4 className={`${classes.price} ${food.price < 10 ? classes.red : classes.black}`}>Price: ${food.price}</h4>
            <button onClick={addToCartHandler}>+</button>
        </div>
    );
}

export default Food;
