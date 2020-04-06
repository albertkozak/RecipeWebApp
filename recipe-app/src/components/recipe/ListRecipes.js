import React, { useState, useEffect } from "react";

export default function ListRecipes(props) {
  const [listRecipe, setListRecipe] = useState([]);

  const URL = "https://ssdrecipeapi.azurewebsites.net/api/Recipes";

  function getRecipe() {
    const token = sessionStorage.getItem("auth-token");
    console.log(token);
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
          //console.log(json);
          setListRecipe(json);
          //  alert(JSON.stringify(json));
        })
        // Data not retrieved.
        .catch(function (error) {
          alert(error);
        });
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  //listRecipe.map(console.log);
  return listRecipe.map((list) => {
    console.log(list);
    return (
      <div
        onClick={() => props.history.push(`/Recipe/${list.id}`)}
        className="reg-form"
      >
        <h2>{list.title}</h2>
        <h4>{list.description}</h4>
        {/* <h5>{list.ingredients[0].ingredient}</h5>
        <h5>{list.ingredients[1].ingredient}</h5>
        <h5>{list.ingredients[2].ingredient}</h5> */}
        <ul>
          {list.ingredients.map((item) => (
            <li>{item.ingredient}</li>
          ))}
        </ul>
      </div>
    );
  });
}
