import React, {useState} from 'react';
import FoodList from './components/FoodList';
import mockFoods from './mockdata/foods';
import Welcome from './components/Welcome';

function App() {

  console.log("App is evaluated");

  const [title, setTitle] = useState("Food!");
  const [foods, setFoods] = useState(mockFoods);

  const handleButtonClick = (param) => {
    alert('You clicked me. ' + param);
  }

  const handleChangeTitle = () => {
    setTitle("Order Food!");
  }

  const handleAddFood = () => {
    const newFood = {
      name: "Pizza",
      url: "https://www.mindmegette.hu/images/388/Social/lead_Social_pizza-alap-recept.jpg",
      description: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough.",
      price: 8
    };
    const newFoods = [...foods, newFood];
    setFoods(newFoods);
  }


  return (
    <div className="container">
      {/* <Welcome borderWeight={3}>
          Hello dear user!
      </Welcome> */}

      <h1 style={{textAlign:"center"}}>{title}</h1>
      <button onClick={() => handleButtonClick("John")}>click me!</button>
      <button onClick={handleChangeTitle}>Change title</button>
      <button onClick={handleAddFood}>Add Food</button>
      <FoodList foods={foods}/>
    </div>
  );

}

export default App;
