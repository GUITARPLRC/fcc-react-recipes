import React from 'react';
import { Modal, Button } from 'react-bootstrap';

var AddModal = React.createClass({
	getInitialState() {
		return {
			ingredients: this.props.ingredients || "",
			title: this.props.title || ""
		}
	},

	updateIngredients(e) {
		this.setState({
			ingredients: e.target.value,
		})
	},

	updateName(e) {
		this.setState({
			title: e.target.value,
		})
	},


	save() {
		const ingredients =  this.state.ingredients.split(',').map((ing) => {
			return ing.trim()
		});

		this.props.save({
			title: this.state.title,
			ingredients: ingredients
		})

		this.props.close()
	},


	/**
	 * In react we ususally use what's called controlled inputs. This means:
	 * The value of the input is controlled by state, not actually what's typed.
	 * As you type, state is set,therefore triggering a rerender updating the input.
	 *
	 * You don't have to use a controlled input.
	 * You could also used what's called a ref which is more like what you were
	 * doing before.  But you'll see that controlled inputs give you a lot of power.
	 * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
	 */
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
})

export default AddModal;
