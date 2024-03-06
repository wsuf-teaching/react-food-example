import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FoodDetails () {

    let {foodId} = useParams();
    const navigate = useNavigate();
    const [foodItem, setFoodItem] = useState();


    useEffect(()=>{
        if(isNaN(foodId)) {
            navigate('/404');
        } else {
            fetch("http://localhost:5000/foods/"+foodId)
            .then(response => response.json())
            .then(data => {setFoodItem(data)})
            .catch(error => console.log(error));
        }
    },[])




    return (
        <>
            <h1>Food detail works!</h1>
            <div>The ID of the current food is: {foodId}</div>
            {foodItem && (
                <p>
                    <hr/>
                    <h1>{foodItem.name}</h1>
                    <p>{foodItem.description}</p>
                    <h5>Price: ${foodItem.price}</h5>
                </p>
            )}
        </>
    );
};

export default FoodDetails;