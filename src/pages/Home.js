import React, {useState, useEffect} from 'react';
import FoodList from '../components/FoodList';
import Welcome from '../components/Welcome';
import NewFood from '../components/NewFood';
import Card from '../components/Card';
import Layout from '../components/Layout';

const Home = React.memo(() => {

    console.log("App is evaluated");

    const [title, setTitle] = useState("Food!");
    const [foods, setFoods] = useState();
  
  
    useEffect( ()=>{
      fetch("http://127.0.0.1:5000/foods")
        .then(response => response.json())
        .then(data => {setFoods(data);})
        .catch(error => console.log(error));
     }, []);
  
  
  
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
      setFoods([...foods, newFood]);
    }
  
    const addNewFoodHandler = (newFood) => {
      setFoods([...foods, newFood]);
    }

    return (
        <Layout>
            {/* <Welcome borderWeight={3}>
                Hello dear user!
            </Welcome> */}

            <h1 style={{textAlign:"center"}}>{title}</h1>   
            <Card>
                <NewFood onAddNewFood={addNewFoodHandler}/>
            </Card>
            <button onClick={() => handleButtonClick("John")}>click me!</button>
            <button onClick={handleChangeTitle}>Change title</button>
            <button onClick={handleAddFood}>Add Food</button>
            {/* {foods && <FoodList foods={foods}/>}
            {!foods && <h4>Loading...</h4>} */}
            {foods ? <FoodList foods={foods}/> : <h4>Loading...</h4>}
        </Layout>
    )
});

export default Home;