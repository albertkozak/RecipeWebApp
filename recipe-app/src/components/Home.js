import React, { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";
//import "./App.css";
//require("dotenv").config();

const Home = (props) => {
  // Wasted over an hour attempting to hide the APP ID + KEY in .env but kept running into a CORS error (I'll obtain a new ID + KEY later once resolved)
  // const APP_ID = process.env.APP_ID;
  // const APP_KEY = process.env.APP_KEY;
  const APP_ID = "8cd9f53a";
  const APP_KEY = "6d496d09b99d1945ce27a655b53ae9f4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("egg");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={"Calories: " + Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
