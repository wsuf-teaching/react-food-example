import FoodForm from "./FoodForm";
import styles from './NewFood.module.css';

function NewFood() {
    return (
        <div className={styles.newfood}>
            <h2>Add a new food!</h2>
            <FoodForm/>
        </div>
    );
}

export default NewFood;