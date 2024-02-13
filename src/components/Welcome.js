import styled from 'styled-components';


// function Welcome() {
//     return (
//         <h1 style={{border: "1px solid red", color: "blue", textAlign: "center"}}>Food list is working!</h1>
//     );
// }

const Welcome = styled.h1`
    text-align: center;
    color: blue;
    border: ${props => props.borderWeight}px solid blue;

    &:hover {
        background-color: lightblue;
    }

    span {
        background-color: yellow;
    }

    @media (max-width: 600px) {
        background-color: aqua;
    }

`;

export default Welcome;