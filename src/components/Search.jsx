import { useEffect, useState } from 'react';
import styles from './search.module.css';

// ;   391159f53197412890f034c2971782f2  (romanisitua@gmail.com)         a6d0a381062045f58e69882015194e3f (autisi@yahoo.com)
// ;   94a1f0c9935a4ca39c218b8abe9afd0f  (nyemike2000@gmail.com)

//const url = "https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=391159f53197412890f034c2971782f2";
const URL = "https://api.spoonacular.com/recipes/complexSearch";

const API_KEY="94a1f0c9935a4ca39c218b8abe9afd0f"

export default function Search({foodData, setFoodData}) {

    const [query, setQuery] = useState("")

    //           callback dependency list (array)
    useEffect(() => {
       async function fetchFood() {
          //  console.log("fetch food executed! ");
          const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
                  
            const data = await res.json();

            console.log(data.results);

            setFoodData(data.results);
        }
        fetchFood();
    }, [query]);


    return (
    <div className={styles.searchContainer}>
        <input className={styles.input}
        value={query} 
        onChange={(e)=> setQuery(e.target.value)} 
        type="text"></input>
    </div>);
}