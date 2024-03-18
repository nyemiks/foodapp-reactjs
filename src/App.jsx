//
import {useState } from 'react';
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import "./App.css";
import FoodDetails from './components/FoodDetails';

function App() {
  
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("680975");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <Container>
        <InnerContainer>
               <FoodList setFoodId={setFoodId} foodData={foodData}></FoodList>
        </InnerContainer>
        <InnerContainer>
               <FoodDetails foodId={foodId}></FoodDetails>
        </InnerContainer>
      </Container>    
    </div>
  )
}

export default App
