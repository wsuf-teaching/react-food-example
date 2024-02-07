import classes from './Food.module.css';

function Food(props) {   // display component

    // let sale;
    // if (props.data.price < 10 ) {
    //     sale = <div id="sale">SALE!</div>;
    // }

    return (
        <div className={`${classes.food}`}>
            <h2 className={classes.name}>{props.data.name.toUpperCase()}</h2>
            <img src={props.data.url} className={classes.image}></img>
            <p>{props.data.description}</p>
            { props.data.price < 10 && 
                <div className={classes.sale}>SALE!</div> 
            }
            <h4 className={`${classes.price} ${props.data.price < 10 ? classes.red : classes.black}`}>Price: ${props.data.price}</h4>
        </div>
    );
}

export default Food;

// style={{color: props.data.price < 10 ? "red" : "black"}}