
function Food(props) {   // display component

    // let sale;
    // if (props.data.price < 10 ) {
    //     sale = <div id="sale">SALE!</div>;
    // }

    return (
        <div className="food">
            <h2>{props.data.name.toUpperCase()}</h2>
            <img src={props.data.url}></img>
            <p>{props.data.description}</p>
            { props.data.price < 10 && 
                <div id="sale">SALE!</div> 
            }
            <h4 style={{color: props.data.price < 10 ? "red" : "black"}}>Price: ${props.data.price}</h4>
        </div>
    );
}

export default Food;