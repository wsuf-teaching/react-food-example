import Food from './Food';
import Card from './Card';
import Welcome from './Welcome';

function FoodList (props) {

    console.log(props.foods);


    return (
        <>
            <Welcome>
                Food list is working!
            </Welcome>
            { props.foods.map((food, i) => 
                <Card key={i} index={i}>
                    <Food data={food} />
                </Card>
            ) }
        </>
    );
}

export default FoodList;