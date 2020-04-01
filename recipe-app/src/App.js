import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe/Recipe";
import "./App.css";
//require("dotenv").config();

const App = () => {
  // Wasted over an hour attempting to hide the APP ID + KEY in .env but kept running into a CORS error (I'll obtain a new ID + KEY later once resolved)
  // const APP_ID = process.env.APP_ID;
  // const APP_KEY = process.env.APP_KEY;
  const APP_ID = "8cd9f53a";
  const APP_KEY = "6d496d09b99d1945ce27a655b53ae9f4";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
