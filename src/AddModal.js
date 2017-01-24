import React from 'react';
import { Modal, Button } from 'react-bootstrap';

var AddModal = React.createClass({
	getInitialState() {
		return {
			ingredients: '',
			title: 'unknown'
		}
	},

	updateIngredients(e) {
		this.setState({
			ingredients: e.target.value,
		})
	},
	updateName(e) {
		this.setState({
			name: e.target.value,
		})
	},

	getRecipeData() {
		const ingredients = this.state.ingredients.split(',').map((ing) => {
			return ing.trim();
		});

		return {
			title: this.state.name,
			ingredients: ingredients
		}
	},

	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.close}>
				<Modal.Header closeButton>
					<Modal.Title>Add Recipe</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Name:</p>
					<input
						autoFocus
						id="name"
						type="text"
						placeholder="Name of Recipe"
						onChange={this.updateName}>
					</input>
					<p>Ingredients:</p>
					<textarea
						value={this.state.ingredients}
						onChange={this.updateIngredients}
						id="list"
						placeholder="Enter recipe ingredients seperated by commas">
					</textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="success" onClick={ () => this.props.save(this.getRecipeData())}>Save</Button>
					<Button bsStyle="default" onClick={this.props.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
})

export default AddModal;
