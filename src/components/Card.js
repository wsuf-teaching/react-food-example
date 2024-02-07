import './Card.css';
import styles from './Card.module.css';

function Card(props) {


    // let myTextColorString = "";
    // if(props.index%2 == 0) {
    //     myTextColorString = "white";
    // }
    // else {
    //     myTextColorString = "lightgray";
    // }

    return (
        <div className={`card ${props.index%2 ? 'whiteBg' : 'grayBg'} ${styles.food}`}>
            {props.children}
        </div>
    );
}

export default Card;