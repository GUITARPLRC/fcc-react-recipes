import React, { Component } from 'react';
import { Jumbotron, Grid, Accordion, Button } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
import Modal from './Modal';

export default class RecipeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: this.props.recipes,
			showModal: false
		}
	}

	open = () => {
		this.setState({showModal: true});
	}

	close = () => {
		this.setState({showModal: false});
	}

	save = (data) => {
		var recipes = [...this.state.recipes];
		// check if new recipe or edited recipe
		var found = recipes.some( (each) => {
			return each.title === data.title;
		})
		if (!found) {
			recipes.push({...data});
		} else {
			for (let i = 0; i < recipes.length; i++) {
				if (recipes[i].title === data.title) {
					recipes[i].title = data.title;
					recipes[i].ingredients = data.ingredients;
				}
			}
		}

		localStorage.setItem('recipes', JSON.stringify(recipes));
		this.setState({
			recipes,
			showModal: false
		});
	}

	delete = (targetId) => {
		var recipes = [...this.state.recipes];
		recipes.splice(targetId, 1);
		localStorage.setItem('recipes', JSON.stringify(recipes));
		this.setState({recipes});
	}

	render() {
		var rows = [];
		for (let i = 0; i < this.state.recipes.length; i++) {
			rows.push(
				<RecipeCard bsStyle={"success"} title={this.state.recipes[i].title}
					ingredients={this.state.recipes[i].ingredients}
					id={i}
					key={i}
					eventKey={i}
					handleDelete={this.delete}
					update={this.save} />
			);
		}
		return (
			<MyJumbo rows={rows} open={this.open} showModal={this.state.showModal}
				close={this.close} save={this.save} />
		)
	}
};

const MyJumbo = ({rows, open, showModal, close, save}) => {
	return (
		<div>
			<Jumbotron>
				<Grid className="well">
					<Accordion>
						{rows}
					</Accordion>
					<Button bsSize="large" bsStyle="primary" onClick={open}>Add Recipe</Button>
				</Grid>
			</Jumbotron>
			{ showModal && <Modal show={showModal} close={close} save={save} /> }
		</div>
	)
}
