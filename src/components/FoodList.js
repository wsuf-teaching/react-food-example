import Food from './Food';

function FoodList (props) {

    console.log(props.foods);

    return (
        <>
            <h1>Food list is working!</h1>
            { props.foods.map(food => 
                <Food data={food}/>
            ) }
        </>

    );
}

export default FoodList;