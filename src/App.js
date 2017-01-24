import React from 'react';
import './App.css';
import Header from './Header';
import RecipeList from './RecipeList';

var recipeData = (localStorage.getItem('recipes')) ? JSON.parse(localStorage["recipes"]) : [
	{title: 'Pizza', ingredients: ['Dough', 'Tomato Sauce', 'Cheese']},
	{title: 'Soup', ingredients: ['Campbell\'s Soup']},
	{title: 'Hot Pocket', ingredients: ['Hot Pocket']}
];

var App = React.createClass({
	getInitialState() {
			return {
				recipes: recipeData
			}
	},

	save(data) {
		var recipes = [
			...this.state.recipes,
			{...data}
		];
		localStorage.setItem('recipes', JSON.stringify(recipes));
		this.setState({
			recipes,
			showModal: false
		});
	},

  render() {
    return (
      <div className="App">
				<Header />
				<RecipeList save={this.save} recipes={this.state.recipes} />
      </div>
    );
  }
})

export default App;
