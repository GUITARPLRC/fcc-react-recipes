import React from 'react';
import { Jumbotron, Grid, Accordion, Button } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
import Modal from './Modal';

var RecipeList = React.createClass({
	getInitialState() {
		return {
			recipes: this.props.recipes,
			showModal: false
		}
	},

	open() {
		this.setState({showModal: true});
	},

	close() {
		this.setState({showModal: false});
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

	delete(targetId) {
		var recipes = [...this.state.recipes];
		recipes.splice(targetId, 1);
		localStorage.setItem('recipes', JSON.stringify(recipes));
		this.setState({recipes});
	},

	render() {
		var rows = [];
		var number = 0;
		for (let i = 0; i < this.state.recipes.length; i++) {
			rows.push(<RecipeCard bsStyle={"success"} title={this.state.recipes[i].title}
				 ingredients={this.state.recipes[i].ingredients} id={number++} key={i} eventKey={i} handleClick={this.delete} />);
		}
		return (
			<div>
				<Jumbotron>
					<Grid className="well">
						<Accordion>
							{rows}
						</Accordion>
						<Button bsSize="large" bsStyle="primary" onClick={this.open}>Add Recipe</Button>
					</Grid>
				</Jumbotron>
				{this.state.showModal && <Modal show={this.state.showModal} close={this.close} save={this.save} />}
			</div>
		)
	}
})

export default RecipeList;
