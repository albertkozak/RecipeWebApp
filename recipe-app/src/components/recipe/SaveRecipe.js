import React, { Component } from "react";

class SaveRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    };
    this.SaveToList = this.SaveToList.bind(this);
  }

  async SaveToList(e) {
    console.log(this.state.title);
    console.log(this.state.description);
    const URL = "https://ssdrecipeapi.azurewebsites.net/api/Recipes";
    const token = sessionStorage.getItem("auth-token");
    if (token) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          Title: this.state.title,
          Description: this.state.description
          //Ingredient: this.props.userName
        })
      })
        // Response received.
        .then(response => response.json())
        // Data retrieved.
        .then(json => {
          alert(JSON.stringify(json));
        })
        // Data not retrieved.
        .catch(function(error) {
          alert(error);
        });
    }
  }
  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
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
        <button className="addButton" onClick={this.SaveToList}>
          Add Recipe
        </button>
      </div>
    );
  }
}
export default SaveRecipe;
