import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class TheModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: this.props.ingredients || "",
			title: this.props.title || ""
		}
	}

	updateIngredients = (e) => {
		this.setState({
			ingredients: e.target.value
		})
	}

	updateName = (e) => {
		this.setState({
			title: e.target.value
		})
	}

	save = () => {
		var ingredients;
		if (this.state.ingredients.length > 1) {
			ingredients =  this.state.ingredients.split(',').map((ing) => {
				return ing.trim()
				});
		} else {
			ingredients = this.state.ingredients;
		}

		this.props.save({
			title: this.state.title || 'Untitled',
			ingredients: ingredients
		})

		this.props.close();
	}

	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.close}>
				<Modal.Header closeButton>
					<Modal.Title>Recipe Info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Name:</p>
					<input
						autoFocus
						value={this.state.title}
						type="text"
						placeholder="Name of Recipe"
						onChange={this.updateName}>
					</input>
					<p>Ingredients:</p>
					<textarea
						value={this.state.ingredients}
						placeholder="Enter recipe ingredients seperated by commas"
						onChange={this.updateIngredients}>
					</textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="success" onClick={this.save}>Save</Button>
					<Button bsStyle="default" onClick={this.props.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
};
