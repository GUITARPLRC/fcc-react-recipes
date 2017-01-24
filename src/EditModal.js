import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
 * you might want to consider just reusing the AddModal for
 * the purpose of editing as well.  this looks like Duplicate codes
 */
var EditModal = React.createClass({
	componentDidMount() {
		var title = document.getElementById('title');
		title.value = this.props.title;
		var text = document.getElementById('text');
		text.value = this.props.ingredients.join(", ");
	},

	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.close}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Recipe</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Name:</p>
					<input id="title" type="text"></input>
					<p>Ingredients:</p>
					<textarea id="text"></textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="success">Save</Button>
					<Button bsStyle="default" onClick={this.props.close}>Cancel</Button>
				</Modal.Footer>
			</Modal>
		)
	}
})

export default EditModal;
