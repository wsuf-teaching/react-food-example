
function Food(props) {   // display component


    return (
        <div className="food">
            <h2>{props.data.name.toUpperCase()}</h2>
            <img src={props.data.url}></img>
            <p>{props.data.description}</p>
            <h4>Price: ${props.data.price}</h4>
        </div>
    );
}

export default Food;