import './Card.css';

function Card(props) {


    // let myTextColorString = "";
    // if(props.index%2 == 0) {
    //     myTextColorString = "white";
    // }
    // else {
    //     myTextColorString = "lightgray";
    // }

    return (
        <div className={`card ${props.index%2 ? 'whiteBg' : 'grayBg'}`}>
            {props.children}
        </div>
    );
}

export default Card;