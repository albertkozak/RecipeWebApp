import React from "react";

const BASE_URL = "https://ssdrecipeapi.azurewebsites.net/api/Recipes";
const TOKEN = sessionStorage.getItem("auth-token");

class SaveRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      ingredients: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      if (TOKEN) {
        fetch(`${BASE_URL}/${this.props.match.params.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            if (json) {
              var ingredients = "";
              if (json.ingredients) {
                ingredients = json.ingredients
                  .map((item) => `${item.ingredient}\n`)
                  .join("");
              }
              this.setState({
                title: json.title,
                description: json.description,
                ingredients: ingredients,
              });
            }
          })
          // Data not retrieved.
          .catch(function (error) {
            alert(error);
          });
      }
    }
  }

  handleSubmit() {
    var recipe = this.buildRecipeObject();
    var url = BASE_URL;
    if (this.props.match.params.id) {
      recipe.id = this.props.match.params.id;
      url += `/${this.props.match.params.id}`;
    }
    if (TOKEN) {
      fetch(url, {
        method: this.props.match.params.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(recipe),
      })
        // Data retrieved.
        .then((json) => {
          this.props.history.push("/List");
        })
        // Data not retrieved.
        .catch(function (error) {
          alert(error);
        });
    }
  }
  handleDelete() {
    var recipe = this.buildRecipeObject();
    var url = BASE_URL;
    if (this.props.match.params.id) {
      recipe.id = this.props.match.params.id;
      url += `/${this.props.match.params.id}`;
    }
    if (TOKEN) {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(recipe),
      })
        // Data retrieved.
        .then((json) => {
          this.props.history.push("/List");
        })
        // Data not retrieved.
        .catch(function (error) {
          alert(error);
        });
    }
  }

  buildRecipeObject = () => {
    var recipe = {
      title: this.state.title,
      description: this.state.description,
      ingredients: [],
    };
    this.state.ingredients
      .split("\n")
      .filter((i) => i)
      .map((item, key) => {
        return recipe.ingredients.push({
          ingredient: item,
        });
      });
    return recipe;
  };

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
          <div className="buttons">
            <button className="addButton" onClick={this.handleSubmit}>
              {this.props.match.params.id ? "Update" : "Save"}
            </button>
            <button className="deleteButton" onClick={this.handleDelete}>
              {this.props.match.params.id ? "Delete" : "Delete"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SaveRecipe;
