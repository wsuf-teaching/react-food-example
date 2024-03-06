import TestContext from "..";
import FoodForm from "./FoodForm";
import styles from './NewFood.module.css';
import { useContext } from "react";

function NewFood(props) {

    const ctx = useContext(TestContext);

    const addNewFoodHandler = (newFood) => {
        props.onAddNewFood(newFood);
    }

    return (
        <div className={styles.newfood}>
            <h2>Add a new food!</h2>
            <h4>{ctx.testValue}</h4>
            <h5>{ctx.testValue2}</h5>
            <FoodForm onAddNewFood={addNewFoodHandler}/>
        </div>
    );
}

export default NewFood;