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
			<MyModal show={this.props.show} close={this.props.close} save={this.save}
				ingredients={this.state.ingredients} updateName={this.updateName} title={this.state.title}
				updateIngredients={this.updateIngredients} />
		)
	}
};

const MyModal = ({save, close, ingredients, updateName, title, show, updateIngredients}) => {
	return (
		<Modal show={show} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>Recipe Info</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Name:</p>
				<input
					autoFocus
					value={title}
					type="text"
					placeholder="Name of Recipe"
					onChange={updateName}>
				</input>
				<p>Ingredients:</p>
				<textarea
					value={ingredients}
					placeholder="Enter recipe ingredients seperated by commas"
					onChange={updateIngredients}>
				</textarea>
			</Modal.Body>
			<Modal.Footer>
				<Button bsStyle="success" onClick={save}>Save</Button>
				<Button bsStyle="default" onClick={close}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}
