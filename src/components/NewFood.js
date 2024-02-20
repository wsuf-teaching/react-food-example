import FoodForm from "./FoodForm";
import styles from './NewFood.module.css';

function NewFood(props) {

    const addNewFoodHandler = (newFood) => {
        props.onAddNewFood(newFood);
    }

    return (
        <div className={styles.newfood}>
            <h2>Add a new food!</h2>
            <FoodForm onAddNewFood={addNewFoodHandler}/>
        </div>
    );
}

export default NewFood;