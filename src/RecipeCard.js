import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';
import Modal from './Modal';

export default class RecipeCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}

	open = () => {
		this.setState({showModal: true});
	}

	close = () => {
		this.setState({showModal: false});
	}

	render() {
		const {title, ingredients, bsStyle, handleDelete, update, ...other} = this.props;

		var list = [];
		for (let i = 0; i < ingredients.length; i++) {
			list.push( <ListGroupItem key={i}>{ingredients[i]}</ListGroupItem> );
		}

		return (
			<Panel bsStyle={bsStyle} header={title} {...other}>
				<h4>Ingredients</h4>
				<ListGroup>
					{list}
				</ListGroup>
				<ButtonToolbar>
					<Button bsStyle="default" onClick={this.open}>Edit Recipe</Button>
					<Button bsStyle="danger" onClick={el => handleDelete(el.target.parentNode.parentNode.parentNode.id)}>Delete Recipe</Button>
				</ButtonToolbar>
				{ this.state.showModal && <Modal title={title} ingredients={ingredients}
					show={this.state.showModal} close={this.close} save={update} /> }
			</Panel>
		)
	}
};
