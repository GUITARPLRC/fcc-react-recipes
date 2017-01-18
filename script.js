(() => {
	'use strict';
	
	var recipes = [
		{'name': 'Pumpkin Pie', 'ingredients': ['Pumpkin Puree', 'Sweetend Condensed Milk', 'Eggs', 'Pumpkin Spice', 'Pie Crust']},
		{'name': 'Spaghetti', 'ingredients': ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']},
		{'name': 'Onion Pie', 'ingredients': ['Onion', 'Pie Crust', 'Sounds Yummy right?']}
	];
	
	var RecipeList = React.createClass({
		render() {
			return (
				<div  className="panel-group" id="accordion">
					{recipes.map( function(each, index) {
						return (
							<RecipeCard each={each} key={index} index={index} />
						)
					})}
				</div>
			);
		}
	});

var RecipeCard = React.createClass({
	getInitialState: function() {
		return {
			name: null,
			ingredients: null
		}
	},
	
	ComponentDidMount: function() {
		this.setState({name: each.name, ingredients: each.ingredients});
	},
	
	edit: function() {
		
	},
	
	delete: function() {},
	
	render() {
		return (
			<div className="panel panel-success">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a href={"#collapse"+this.props.index} data-toggle="collapse" data-parent="#accordion">{this.props.each.name}</a>
					</h4>
				</div>
				<div id={"collapse"+this.props.index} className="panel-collapse collapse">
					<div className="panel-body">
						<h5>Ingredients</h5>
						<ul>
							{this.props.each.ingredients.map( function(ingredient, key){
								return (
									<li key={key}>{ingredient}</li>
								)
							})}
						</ul>
						<button className="btn btn-info" data-toggle="modal" data-target="#editRecipe">Edit Recipe</button>
						<button className="btn btn-danger">Delete Recipe</button>
					</div>
				</div>
				<EditRecipe />
			</div>
		);
	}
});
	
	var AddRecipe = React.createClass({
		render() {
			return (
				<button className="btn btn-lg btn-primary" data-toggle="modal" data-target="#addRecipeModal">Add Recipe</button>
			);
		}
	});
	
	var AddRecipeModal = React.createClass({
		render() {
			return (
				<div className="modal fade" id="addRecipeModal">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
								<h4 className="modal-Title">New Recipe</h4>
							</div>
							<div className="modal-body">
								<p>Name:</p>
								<input type="text" id="name"></input>
								<p>Ingredients:</p>
								<textarea cols="20" type="text" id="ingredients" placeholder="Seperate ingredients with comma (i.e. cheese, sauce, etc.)"></textarea>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">Save Recipe</button>
							</div>
						</div>
					</div>
				</div>
			);
		}
	});
	
	var EditRecipe = React.createClass({
		render() {
			return (
				<div className="modal fade" id="editRecipe">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
									<h4 className="modal-Title">Edit Recipe</h4>
								</div>
								<div className="modal-body">
									<p>Name:</p>
									<input type="text" id="name"></input>
									<p>Ingredients:</p>
									<textarea cols="20" type="text" id="ingredients"></textarea>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-primary" data-dismiss="modal">Save Edit</button>
								</div>
							</div>
						</div>
					</div>
			);
		}
	});
	
	
	var App = React.createClass({
		render() {
			return (
				<div className="container well">
					<div className="row">
						<div className="col-xs-12">
							<RecipeList />
							<AddRecipe />
							<AddRecipeModal />
						</div>
					</div>
				</div>
			);
		}
	});
	
	ReactDOM.render(<App />, document.getElementById('app'));
})();