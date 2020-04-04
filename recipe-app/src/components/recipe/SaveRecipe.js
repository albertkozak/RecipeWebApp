import React, { Component } from "react";

class SaveRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      ingredients: "",
    };
    this.SaveToList = this.SaveToList.bind(this);
  }

  async SaveToList(e) {
    var ingredientsArray = this.state.ingredients.split("\n");

    console.log(ingredientsArray.length);
    var ingredientsJsonObj = {};
    for (var i = 0; i < ingredientsArray.length; i++) {
      ingredientsJsonObj["ingredient" + (i + 1)] = ingredientsArray[i];
    }
    console.log(ingredientsJsonObj);

    // const URL = "https://ssdrecipeapi.azurewebsites.net/api/Recipes";
    // const token = sessionStorage.getItem("auth-token");
    // if (token) {
    //   fetch(URL, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({
    //       Title: this.state.title,
    //       Description: this.state.description,
    //       Ingredients: ingredientsArray,
    //     }),
    //   })
    //     // Response received.
    //     .then((response) => response.json())
    //     // Data retrieved.
    //     .then((json) => {
    //       alert(JSON.stringify(json));
    //     })
    //     // Data not retrieved.
    //     .catch(function (error) {
    //       alert(error);
    //     });
    // }
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <div className="reg-form">
        <input
          className="input"
          type="text"
          id="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onInputChange}
        />
        <input
          className="input"
          type="text"
          id="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.onInputChange}
        />
        <textarea
          wrap="hard"
          className="input"
          type="text"
          id="ingredients"
          placeholder="Ingredients"
          value={this.state.ingredients}
          onChange={this.onInputChange}
        />
        <button className="addButton" onClick={this.SaveToList}>
          Add Recipe
        </button>
      </div>
    );
  }
}
export default SaveRecipe;
