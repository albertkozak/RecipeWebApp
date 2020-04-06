import React, { useState, useEffect } from "react";

export default function ListRecipes() {
  const [listRecipe, setListRecipe] = useState({});

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
          console.log(json);
          //   setListRecipe(json);
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
  });

  return (
    <div>
      <p></p>
    </div>
  );
}
