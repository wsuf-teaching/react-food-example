import Food from './Food';
import Card from './Card';

function FoodList (props) {

    console.log(props.foods);


    return (
        <>
            <span>New span</span>
            { props.foods.map((food, i) => 
                <Card key={i} index={i}>
                    <Food data={food}/>
                </Card>
            ) }
        </>
    );
}

export default FoodList;