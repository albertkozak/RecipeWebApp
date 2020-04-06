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
    var recipe = {
      title: this.state.title,
      description: this.state.description,
      ingredients: [],
    };
    this.state.ingredients.split("\n").map((item, key) => {
      recipe.ingredients.push({
        ingredient: item,
      });
    });
    //console.log(recipe.ingredients);
    const URL = "https://ssdrecipeapi.azurewebsites.net/api/Recipes";
    const token = sessionStorage.getItem("auth-token");
    if (token) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recipe),
      })
        // Data retrieved.
        .then((json) => {
          // alert(JSON.stringify(json));
          this.props.history.push("/");
        })
        // Data not retrieved.
        .catch(function (error) {
          alert(error);
        });
    }
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="saveRecipe">
          <h1>Add Recipe</h1>
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
            Save
          </button>
        </div>
      </div>
    );
  }
}
export default SaveRecipe;
