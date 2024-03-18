import ItemList from './ItemList';
import styles from './fooddetails.module.css';
import { useEffect, useState } from "react";


//const url = "https://api.spoonacular.com/recipes/658295/information";

// ;   391159f53197412890f034c2971782f2  (romanisitua@gmail.com)         a6d0a381062045f58e69882015194e3f (autisi@yahoo.com)
// ;   94a1f0c9935a4ca39c218b8abe9afd0f  (nyemike2000@gmail.com)

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "94a1f0c9935a4ca39c218b8abe9afd0f";

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

  console.log("id: " + foodId);
  //console.log("url: " + URL);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);

      const data = await res.json();

      console.log(data);

      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>

      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>


        <img className={styles.recipeImage} src={food.image} alt="" />
        
        <div className={styles.recipeDetails}>
          <span>
            <strong>&#9202; {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong> Serves {food.servings}</strong>
          </span>
          <span><strong>{food.vegetarian ? " Vegetarian" : " non - vegetarian"}</strong></span>
          <span><strong> {food.vegan ? "Vegan" : ""}</strong></span>
        </div>

        <div>
          $ <span><strong>{food.pricePerServing / 100} " Per Serving"</strong></span>
        </div>

      </div>
          <h2>Ingredients</h2>

          <ItemList food={food} isLoading={isLoading}></ItemList>
          

         
       <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
       
       <ol>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions.map((item) =>
            item.steps.map((step) => <li key={step.number}>{step.step}</li>)
          )
        )}

        </ol>
      </div>


    </div>
  );
}
