import React, { useState, useEffect } from "react";

export default function ListRecipes(props) {
  const [listRecipe, setListRecipe] = useState([]);

  const URL = "https://ssdrecipeapi.azurewebsites.net/api/Recipes";

  function getRecipe() {
    const token = sessionStorage.getItem("auth-token");
    if (token) {
      fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        // Data retrieved.
        .then((json) => {
          setListRecipe(json);
        })
        // Data not retrieved.
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className="App">
      <div className="listRecipe">
        <h1>My Recipes</h1>
        <div className="recipes">
          {listRecipe.map((list, index) => {
            return (
              <div key={index} className="recipeList">
                <h2>{list.title}</h2>
                <h4>{list.description}</h4>
                <ul>
                  {list.ingredients.map((item, i) => (
                    <li key={i}>{item.ingredient}</li>
                  ))}
                </ul>
                <button
                  className="editButton"
                  onClick={() => props.history.push(`/Recipe/${list.id}`)}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
