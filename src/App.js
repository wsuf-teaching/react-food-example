import React from 'react';
import Food from './components/Food';
import FoodList from './components/FoodList';
import mockFoods from './mockdata/foods';

function App() {

  const printTime = () => {
    return new Date().toDateString();
  }


  return (
    <>
      <FoodList foods={mockFoods}/>
    </>
  );

}

export default App;
