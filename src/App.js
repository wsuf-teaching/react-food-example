import React from 'react';
import FoodList from './components/FoodList';
import mockFoods from './mockdata/foods';
import Welcome from './components/Welcome';

function App() {

  const printTime = () => {
    return new Date().toDateString();
  }

  const handleButtonClick = (param) => {
    alert('You clicked me. ' + param);
  }


  return (
    <>
      <Welcome borderWeight={3}>
          Hello dear user!
      </Welcome>
      <button onClick={() => handleButtonClick("John")}>click me!</button>
      {/* <button onClick={handleButtonClick.bind(null,"John")}>click me!</button> */}
      <FoodList foods={mockFoods}/>
    </>
  );

}

export default App;
