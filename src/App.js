import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import RecipeList from './RecipeList';

console.clear();

var recipes = (localStorage.getItem('recipes')) ? JSON.parse(localStorage["recipes"]) : [
	{title: 'Pizza', ingredients: ['Dough', 'Tomato Sauce', 'Cheese']},
	{title: 'Soup', ingredients: ['Campbell\'s Soup']},
	{title: 'Hot Pocket', ingredients: ['Hot Pocket']}
];

export default class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
				<RecipeList recipes={recipes} />
      </div>
    );
  }
};
