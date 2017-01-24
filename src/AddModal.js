import React from 'react';
import { Modal, Button } from 'react-bootstrap';

var AddModal = React.createClass({
	componentDidMount() {
		document.getElementById('name').focus();
	},
	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.close}>
				<Modal.Header closeButton>
					<Modal.Title>Add Recipe</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Name:</p>
					<input id="name" type="text" placeholder="Name of Recipe"></input>
					<p>Ingredients:</p>
					<textarea id='list' placeholder="Enter recipe ingredients seperated by commas"></textarea>
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="success" onClick={this.props.save}>Save</Button>
					<Button bsStyle="default" onClick={this.props.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		)
	}
})

export default AddModal;
